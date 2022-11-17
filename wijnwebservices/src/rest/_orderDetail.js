const Router = require("@koa/router");
const orderDetailService = require("../service/orderDetail");

const getOrderDetail = async (ctx) => {
  ctx.body = await orderDetailService.getAll();
};

const getOrderDetailById = async (ctx) => {
  ctx.body = orderDetailService.getById(ctx.params.id);
};

const createOrderDetail = async (ctx) => {
  ctx.body = orderDetailService.create({ ...ctx.request.body });
};

const deleteOrderDetail = async (ctx) => {
  orderDetailService.deleteById(ctx.params.id);
  ctx.status = 204;
};

const updateOrderDetail = async (ctx) => {
  ctx.body = orderDetailService.updateById(ctx.params.id, {
    ...ctx.request.body,
  });
};

module.exports = (app) => {
  const router = new Router({ prefix: "/orderDetail" });
  router.get("/", getOrderDetail);
  router.get("/:id", getOrderDetailById);
  router.post("/", createOrderDetail);
  router.delete("/:id", deleteOrderDetail);
  router.put("/:id", updateOrderDetail);

  app.use(router.routes());
  app.use(router.allowedMethods());
};
