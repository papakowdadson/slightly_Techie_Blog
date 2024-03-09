const redisClient = require("../config/redis_config");

// Cache Middleware

const cacheById = async (req, res, next) => {
  console.log("Just hitted cache...");
  const { id } = req.params;

  // Set a timeout for the Redis get operation (e.g., 5 seconds)
  const timeoutMs = 5000;

  const timeout = setTimeout(() => {
    // Timeout handler: If the Redis get operation takes longer than the specified timeout, respond with an error
    console.error("Redis get operation timed out");
    res.status(504).send("Gateway Timeout");
    // redisClient.disconnect(); // Optionally disconnect from Redis to free up resources
  }, timeoutMs);

  let cachedBlog = await redisClient.get(`${id}`);
  console.log("=========");
  console.log(cachedBlog);
  // console.log(JSON.stringify(cachedBlog, null, 2));
  // const localBlog = JSON.stringify(cachedBlog);
  // console.log(Object.values(localBlog));
  // if (cachedBlog !== null) {
  //   clearTimeout(timeout); // Clear the timeout since the Redis get operation completed
  // }
  if (cachedBlog !== null) {
    clearTimeout(timeout); // Clear the timeout since the Redis get operation completed
    res.status(200).send(cachedBlog);
  } else {
    clearTimeout(timeout); // Clear the timeout since the Redis get operation completed
    next();
  }

  // redisClient.hGetAll(id, (err, data) => {
  //   // console.log(err);
  //   clearTimeout(timeout); // Clear the timeout since the Redis get operation completed

  //   if (err) {
  //     console.error("Redis Error:", err);
  //     res.status(500).send("Internal Server Error");
  //     return;
  //   }

  //   if (data !== null) {
  //     res.status(200).json(data);
  //   } else {
  //     next();
  //   }
  // });
};

module.exports = { cacheById };
