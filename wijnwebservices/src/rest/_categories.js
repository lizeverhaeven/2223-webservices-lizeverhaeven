const Router = require("@koa/router");
const categorieService = require("../service/categorie");

const getCategorie = async (ctx) => {
  ctx.body = await categorieService.getAll();
};

const getCategoriesById = async (ctx) => {
  ctx.body = categorieService.getById(ctx.params.id);
};

const createCategorie = async (ctx) => {
  ctx.body = categorieService.create({ ...ctx.request.body });
};

const deleteCategorie = async (ctx) => {
  categorieService.deleteById(ctx.params.id);
  ctx.status = 204;
};

const updateCategorie = async (ctx) => {
  ctx.body = categorieService.updateById(ctx.params.id, {
    ...ctx.request.body,
  });
};

module.exports = (app) => {
  const router = new Router({ prefix: "/categorie" });
  router.get("/", getCategorie);
  router.get("/:id", getCategoriesById);
  router.post("/", createCategorie);
  router.delete("/:id", deleteCategorie);
  router.put("/:id", updateCategorie);

  app.use(router.routes());
  app.use(router.allowedMethods());
};
