import { Schema, models, model } from "mongoose";

const MembershipSchema = new Schema({
  name: String,
  rating: Number,
  location: String,
  category: String,
  picture: String,
  price: Number,
});

const Membership = models?.Membership || model("Membership", MembershipSchema);

export default Membership;
