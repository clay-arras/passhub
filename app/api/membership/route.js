import Membership from "@/app/models/Membership";
import { initMongoose } from "@/app/lib/mongoose";
import { createRedisInstance } from "../redis";

const MAX_AGE = 60_000 * 60;
const EXPIRY_MS = `PX`;

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
    console.log(cached);
    return JSON.parse(cached);
  }

  if (ids) {
    const idsArray = ids.split(",");
    const data = Response.json(await Membership.find({ _id: { $in: idsArray } }));
    await redis.set(key, JSON.stringify(data), EXPIRY_MS, MAX_AGE);
    return data;
  } else {
    const data = Response.json(await findAllMemberships());
    await redis.set(key, JSON.stringify(data), EXPIRY_MS, MAX_AGE);
    return data;

  }
}

export { handler as GET, handler as POST };