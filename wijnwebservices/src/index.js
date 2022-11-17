const Koa = require("koa");
const { getLogger } = require("./core/logging");
const config = require("config");
const bodyParser = require("koa-bodyparser");
const installRest = require("./rest/index");
const koaCors = require("@koa/cors");

const logger = getLogger();
const NODE_ENV = config.get("env");

const LOG_LEVEL = process.env.LOG_LEVEL;
//const LOG_LEVEL = config.get("log.level");
const LOG_DISABLED = process.env.LOG_DISABLED;
//const LOG_DISABLED = config.get("log.disabled");
//const CORS_ORIGINS = config.get("cors.origins");
//const CORS_MAX_AGE = config.get("cors.maxAge");
logger.info(`${NODE_ENV} - level: ${LOG_LEVEL}, disabled: ${LOG_DISABLED}`);

const app = new Koa();
/*app.use(
  koaCors({
    origin: (ctx) => {
      if (CORS_ORIGINS.indexOf(ctx.request.header.origin) !== -1) {
        return ctx.request.header.origin;
      }
      // Not a valid domain at this point, let's return the first valid as we should return a string
      return CORS_ORIGINS[0];
    },
    allowHeaders: ["Accept", "Content-Type", "Authorization"],
    maxAge: CORS_MAX_AGE,
  })
);*/
app.use(bodyParser());
installRest(app);

app.listen(9000);
logger.info("server started");
