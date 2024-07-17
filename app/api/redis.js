import Redis from "ioredis";

function getRedisConfiguration() {
  const config = {
    // host: process.env.REDIS_HOST,
    // password: process.env.REDIS_PASSWORD,
    // port: process.env.REDIS_PORT,
  };

  return config;
}

export function createRedisInstance(config = getRedisConfiguration()) {
  try {
    const options = {
      host: process.env.UPSTASH_REDIS_REST_URL,
      // host: config.host,
      // port: config.port,
      // password: config.password,
      lazyConnect: true,
      showFriendlyErrorStack: true,
      enableAutoPipelining: true,
      maxRetriesPerRequest: 4,
      retryStrategy: (times) => {
        if (times > 3) {
          throw new Error(`[Redis] Could not connect after ${times} attempts`);
        }

        return Math.min(times * 200, 1000);
      },
    };

    const redis = new Redis(options);

    redis.on("error", (error) => {
      console.warn("[Redis] Error connecting", error);
    });

    return redis;
  } catch (e) {
    throw new Error(`[Redis] Could not create a Redis instance`);
  }
}
