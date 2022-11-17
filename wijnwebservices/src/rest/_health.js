const healthService = require("../service/health");
const Router = require("@koa/router");

const ping = async (ctx) => {
  ctx.body = healthService.ping();
};

const getVersions = async (ctx) => {
  ctx.body = healthService.getVersion();
};

module.exports = (app) => {
  const router = new Router({ prefix: "/health" });

  router.get("/ping", ping);
  router.get("/version", getVersions);

  app.use(router.routes());
};
