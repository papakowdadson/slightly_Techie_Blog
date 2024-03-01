const redisClient = require("../config/redis_config");

// Cache Middleware

const cacheById = (req, res, next) => {
  console.log("Just hitted cache...");
  const { id } = req.params;

  redisClient.get(id, (err, data) => {
    console.log(err);
    if (err) throw err;

    if (data !== null) {
      res.status(200).json(data);
    } else {
      next();
    }
  });
};

module.exports = { cacheById };
