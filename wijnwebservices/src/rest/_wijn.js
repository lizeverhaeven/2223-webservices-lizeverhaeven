const Router = require("@koa/router");
const wijnService = require("../service/wijn");

const getWijn = async (ctx) => {
  ctx.body = await wijnService.getAll();
};

const getWijnById = async (ctx) => {
  ctx.body = wijnService.getById(ctx.params.id);
};

const createWijn = async (ctx) => {
  ctx.body = wijnService.create({ ...ctx.request.body });
};

const deleteWijn = async (ctx) => {
  wijnService.deleteById(ctx.params.id);
  ctx.status = 204;
};

const updateWijn = async (ctx) => {
  ctx.body = wijnService.updateById(ctx.params.id, {
    ...ctx.request.body,
  });
};

module.exports = (app) => {
  const router = new Router({ prefix: "/wijn" });
  router.get("/", getWijn);
  router.get("/:id", getWijnById);
  router.post("/", createWijn);
  router.delete("/:id", deleteWijn);
  router.put("/:id", updateWijn);

  app.use(router.routes());
  app.use(router.allowedMethods());
};
