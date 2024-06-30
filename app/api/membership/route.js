import Membership from "@/app/models/Membership";
import { initMongoose } from "@/app/lib/mongoose";

export async function findAllMemberships() {
  return Membership.find().exec();
}

async function handler(req, res) {
  await initMongoose();
  const ids = req.nextUrl.searchParams.get("ids");
  if (ids) {
    const idsArray = ids.split(",");
    return Response.json(await Membership.find({ _id: { $in: idsArray } }));
  } else {
    return Response.json(await findAllMemberships());
  }
}

export { handler as GET, handler as POST };