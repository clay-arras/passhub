import { Schema, models, model } from "mongoose";

const MembershipSchema = new Schema({
  name: String,
  rating: Number,
  location: String,
  category: String,
  picture: String,
  price: Number,
  desc: String,
});

const Membership = models?.Membership || model("Membership", MembershipSchema);

export default Membership;
