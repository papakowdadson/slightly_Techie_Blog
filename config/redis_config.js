const redis = require("redis");

const REDIS_PORT = process.env.PORT || 6379;

const redisClient = redis.createClient(REDIS_PORT);

redisClient.on("error", (err) => console.log("Redis Client Error", err));

redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

  (async()=>{await redisClient.connect();})()

module.exports = redisClient;
