const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const blogRouter = require("./routes/blog/blogRouter");
const rateLimitMiddleware = require("./middleware/ratelimit");
const Dotenv = require("dotenv");
const Sentry = require('@sentry/node');
// Importing @sentry/tracing patches the global hub for tracing to work.
const Tracing = require("@sentry/tracing");

Dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// Initialize Sentry
Sentry.init({
  dsn: process.env.SENTRYDNS,
  environment: process.env.NODE_ENV,
  integrations: [
  // enable HTTP calls tracing
  new Sentry.Integrations.Http({ tracing: true }),
  // enable Express.js middleware tracing
  new Tracing.Integrations.Express({ app }),
  ],
  tracesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(rateLimitMiddleware);

app.use("/blog", blogRouter);

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry ? `Internal Server Error. Error ID: ${res.sentry}\n` : 'Internal Server Error');
  });

app.listen(port, () => {
  console.log("server running on port:", port);
});

module.exports = app;
