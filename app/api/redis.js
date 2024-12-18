import Redis from "ioredis";

function getRedisConfiguration() {
  const config = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    // password: process.env.REDIS_PASSWORD,
  };

  return config;
}

export function createRedisInstance(config = getRedisConfiguration()) {
  try {
    const options = {
      host: config.host,
      port: config.port,
      // password: config.password,
      maxRetriesPerRequest: 4,
      retryStrategy: (times) => {
        if (times > 3) {
          throw new Error(`[Redis] Could not connect after ${times} attempts`);
        }

        return Math.min(times * 200, 1000);
      },
    };

    const redis = new Redis();
    redis.on("error", (error) => {
      console.warn("[Redis] Error connecting", error);
    });

    return redis;
  } catch (e) {
    throw new Error(`[Redis] Could not create a Redis instance`);
  }
}