const redis = require("redis");

const redisClient = redis.createClient({
  // url: `redis://${process.env.REDIS_HOST || "redis"}:${
  //   process.env.REDIS_PORT || 6379
  // }`,
  socket: {
        port: process.env.REDIS_PORT,
        host: process.env.REDIS_HOST
    },
  legacyMode: true,
  retryStrategy: (times) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));

redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

(async () => {
  try {
    await redisClient.connect();
  } catch (err) {
    console.error("Redis connection error:", err);
  }
})();

module.exports = redisClient;
