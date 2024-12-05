import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema({
    user_email: { type: String, default: null },
    timestamp: { type: Date, default: Date.now },
    order_total: Number,
    items: [
        { item_id: { type: String } }
    ],
});

const Order = models?.Order || model("Order", OrderSchema);

export default Order;