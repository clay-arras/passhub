import Membership from "@/app/models/Membership";
import { initMongoose } from "@/app/lib/mongoose";
import { createRedisInstance } from "../redis";

export async function findAllMemberships() {
  return Membership.find().exec();
}

async function handler(req, res) {
  await initMongoose();
  const ids = req.nextUrl.searchParams.get("ids");

  const redis = createRedisInstance();
  const key = "key#" + ids;
  const cached = await redis.get(key);
  if (cached) {
    return Response.json(JSON.parse(cached));
  }

  if (ids) {
    const idsArray = ids.split(",");
    const data = await Membership.find({ _id: { $in: idsArray } });
    await redis.set(key, JSON.stringify(data));
    return Response.json(data);
  } else {
    const data = await findAllMemberships();
    await redis.set(key, JSON.stringify(data));
    return Response.json(data);
  }
}

export { handler as GET, handler as POST };