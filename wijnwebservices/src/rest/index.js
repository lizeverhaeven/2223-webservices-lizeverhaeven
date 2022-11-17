const installCategorieRouter = require("./_categories");
const installWijnRouter = require("./_wijn");
const installSmaakRouter = require("./_smaak");
const installOrderDetailRouter = require("./_orderdetail");
const installOrderRouter = require("./_order");
const installKlantRouter = require("./_klant");
const installAdresRouter = require("./_adres");
const installHealthRouter = require("./_health");
const Router = require("@koa/router");

module.exports = (app) => {
  const router = new Router({ prefix: "/api" });

  installCategorieRouter(router);
  installWijnRouter(router);
  installSmaakRouter(router);
  installOrderDetailRouter(router);
  installOrderRouter(router);
  installKlantRouter(router);
  installAdresRouter(router);
  installHealthRouter(router);

  app.use(router.routes()).use(router.allowedMethods());
};
