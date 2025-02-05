import { config } from "@/lib/config";
import { Redis } from "@upstash/redis";
const redis = new Redis({
  url: config.env.UPSTASH_URL,
  token: config.env.UPSTASH_TOKEN,
});

export { redis };
