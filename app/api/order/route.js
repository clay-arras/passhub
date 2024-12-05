import Order from "@/app/models/Order";
import { initMongoose } from "@/app/lib/mongoose";

export async function getAllOrdersFromAccount(email) {
    return Order.find({ user_email: email }).exec();
}

async function handler(req, res) {
    await initMongoose();
    const email = req.nextUrl.searchParams.get("email");
    const orders = await getAllOrdersFromAccount(email);
    return Response.json(orders);
}

export { handler as GET };