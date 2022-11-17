const Router = require("@koa/router");
const klantService = require("../service/klant");

const getKlant = async (ctx) => {
  ctx.body = await klantService.getAll();
};

const getKlantById = async (ctx) => {
  ctx.body = klantService.getById(ctx.params.id);
};

const createKlant = async (ctx) => {
  ctx.body = klantService.create({ ...ctx.request.body });
};

const deleteKlant = async (ctx) => {
  klantService.deleteById(ctx.params.id);
  ctx.status = 204;
};

const updateKlant = async (ctx) => {
  ctx.body = klantService.updateById(ctx.params.id, {
    ...ctx.request.body,
  });
};

module.exports = (app) => {
  const router = new Router({ prefix: "/order" });
  router.get("/", getKlant);
  router.get("/:id", getKlantById);
  router.post("/", createKlant);
  router.delete("/:id", deleteKlant);
  router.put("/:id", updateKlant);

  app.use(router.routes());
  app.use(router.allowedMethods());
};
