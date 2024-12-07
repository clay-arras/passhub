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

  let key = "key#all";
  if (ids) {
    const sortedIds = ids.split(",").sort();
    key = "key#" + sortedIds.join(",");
  }

  const cached = await redis.get(key);
  if (cached) {
    return Response.json(JSON.parse(cached));
  }

  if (ids) {
    const sortedIds = ids.split(",").sort();
    const data = await Membership.find({ _id: { $in: sortedIds } });
    await redis.set(key, JSON.stringify(data));
    return Response.json(data);
  } else {
    const data = await findAllMemberships();
    await redis.set(key, JSON.stringify(data));
    return Response.json(data);
  }
}

export { handler as GET, handler as POST };