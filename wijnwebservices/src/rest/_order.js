const Router = require("@koa/router");
const orderService = require("../service/order");

const getOrder = async (ctx) => {
  ctx.body = await orderService.getAll();
};

const getOrderById = async (ctx) => {
  ctx.body = orderService.getById(ctx.params.id);
};

const createOrder = async (ctx) => {
  ctx.body = orderService.create({ ...ctx.request.body });
};

const deleteOrder = async (ctx) => {
  orderService.deleteById(ctx.params.id);
  ctx.status = 204;
};

const updateOrder = async (ctx) => {
  ctx.body = orderService.updateById(ctx.params.id, {
    ...ctx.request.body,
  });
};

module.exports = (app) => {
  const router = new Router({ prefix: "/order" });
  router.get("/", getOrder);
  router.get("/:id", getOrderById);
  router.post("/", createOrder);
  router.delete("/:id", deleteOrder);
  router.put("/:id", updateOrder);

  app.use(router.routes());
  app.use(router.allowedMethods());
};
