const Router = require("@koa/router");
const smaakService = require("../service/smaak");

const getSmaak = async (ctx) => {
  ctx.body = await smaakService.getAll();
};

const getSmaakById = async (ctx) => {
  ctx.body = smaakService.getById(ctx.params.id);
};

const createSmaak = async (ctx) => {
  ctx.body = smaakService.create({ ...ctx.request.body });
};

const deleteSmaak = async (ctx) => {
  smaakService.deleteById(ctx.params.id);
  ctx.status = 204;
};

const updateSmaak = async (ctx) => {
  ctx.body = smaakService.updateById(ctx.params.id, {
    ...ctx.request.body,
  });
};

module.exports = (app) => {
  const router = new Router({ prefix: "/smaak" });
  router.get("/", getSmaak);
  router.get("/:id", getSmaakById);
  router.post("/", createSmaak);
  router.delete("/:id", deleteSmaak);
  router.put("/:id", updateSmaak);

  app.use(router.routes());
  app.use(router.allowedMethods());
};
