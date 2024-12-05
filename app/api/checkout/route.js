import { initMongoose } from "@/app/lib/mongoose";
import Membership from "@/app/models/Membership";
import { redirect } from "next/navigation";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Order from "@/app/models/Order";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function handler(req, res) {
  await initMongoose();

  const ids = req.nextUrl.searchParams.get("ids").split(",");
  const memberships = await Membership.find({ _id: { $in: ids } });
  const session = await getServerSession(
    req,
    {
      ...res,
      getHeader: (name) => res.headers?.get(name),
      setHeader: (name, value) => res.headers?.set(name, value),
    },
    authOptions
  );

  let line_items = [];
  for (let membership of memberships) {
    line_items.push({
      quantity: 1,
      price_data: {
        currency: "USD",
        product_data: {
          name: membership.name,
        },
        unit_amount: membership.price * 100,
      },
    });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    line_items: line_items,
    mode: "payment",
    customer_email: session?.user?.email,
    success_url: `${req.headers.get("origin")}/?success=true`,
    cancel_url: `${req.headers.get("origin")}/?canceled=true`,
  });

  if (checkoutSession.payment_status == "paid" || checkoutSession.livemode == false) {
    await Order.collection.insertOne({
      user_email: session?.user?.email || null,
      timestamp: new Date(),
      order_total: checkoutSession.amount_total,
      items: ids.map(x => ({ item_id: x })),
    });
  } 

  redirect(checkoutSession.url);
}

export { handler as POST };
