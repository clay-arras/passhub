import Order from "@/app/models/Order";
import { initMongoose } from "@/app/lib/mongoose";
import { createRedisInstance } from "@/app/api/redis";

// export async function getAllOrdersFromAccount(email) {
//     const allOrders = await Order.find().exec();
//     return allOrders.filter(x => x.email == email);
// }

async function handler(req, res) {
    await initMongoose();
    const email = req.nextUrl.searchParams.get("email");
    const orders = await Order.find({ email: email }).exec();
    return orders;
}

export { handler as GET, handler as POST };