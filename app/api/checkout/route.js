import { initMongoose } from "@/app/lib/mongoose";
import Membership from "@/app/models/Membership";
import { redirect } from 'next/navigation'

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

async function handler(req, res) {
  await initMongoose();

  const ids = req.nextUrl.searchParams.get("ids").split(",");
  const memberships = await Membership.find({ _id: { $in: ids } });

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
    success_url: `${req.headers.get("origin")}/?success=true`,
    cancel_url: `${req.headers.get("origin")}/?canceled=true`,
  });

  redirect(checkoutSession.url);
}

export { handler as POST };