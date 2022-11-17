const Router = require("@koa/router");
const adresService = require("../service/adres");

const getAdres = async (ctx) => {
  ctx.body = await adresService.getAll();
};

const getAdresById = async (ctx) => {
  ctx.body = adresService.getById(ctx.params.id);
};

const createAdres = async (ctx) => {
  ctx.body = adresService.create({ ...ctx.request.body });
};

const deleteAdres = async (ctx) => {
  adresService.deleteById(ctx.params.id);
  ctx.status = 204;
};

const updateAdres = async (ctx) => {
  ctx.body = adresService.updateById(ctx.params.id, {
    ...ctx.request.body,
  });
};

module.exports = (app) => {
  const router = new Router({ prefix: "/order" });
  router.get("/", getAdres);
  router.get("/:id", getAdresById);
  router.post("/", createAdres);
  router.delete("/:id", deleteAdres);
  router.put("/:id", updateAdres);

  app.use(router.routes());
  app.use(router.allowedMethods());
};
