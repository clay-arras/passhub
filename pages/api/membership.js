import Membership from "@/models/Membership";
import { initMongoose } from "@/lib/mongoose";

export async function findAllMemberships() {
  return Membership.find().exec();
}

export default async function handle(req, res) {
  await initMongoose();
  const { ids } = req.query;
  if (ids) {
    const idsArray = ids.split(",");
    res.json(await Membership.find({ _id: { $in: idsArray } }).exec());
  } else {
    res.json(await findAllMemberships());
  }
}
