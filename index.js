const express = require("express");
const bodyParser = require("body-parser");
const blogRouter = require("./routes/blog/blogRouter");
const rateLimitMiddleware = require("./middleware/ratelimit");
const Dotenv = require("dotenv");

Dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(rateLimitMiddleware);

app.use("/blog", blogRouter);

app.listen(port, () => {
  console.log("server running on port:", port);
});

module.exports = app;
