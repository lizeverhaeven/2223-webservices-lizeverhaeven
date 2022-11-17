let ORDER = require("../data/mock-data");

const getAll = () => {
  return Promise.resolve({ items: ORDER, count: ORDER.length });
};

const getById = (id) => {
  return ORDER.find((t) => t.id === parseInt(id));
};

const create = ({ orderId, orderDatum, klantId, adresId }) => {
  if (typeof orderId === "orderId") {
    orderId = {
      id: Math.floor(Math.random() * 100000),
      orderId: orderId,
    };
  }
  const newOrder = {
    orderId: Math.max(...ORDER.map((t) => t.id)) + 1,
    orderDatum: new Date(orderDatum),
    klantId: klantId,
    adresId: adresId,
  };

  ORDER = [...ORDER, newOrder];
  return newOrder;
};

const updateById = ({ orderId, orderDatum, klantId, adresId }) => {
  let order = ORDER.find((t) => t.id === parseInt(id));
  if (order) {
    order.orderId = orderId;
    order.orderDatum = orderDatum;
    order.klantId = klantId;
    order.adresId = adresId;
  }
  return order;
};

const deleteById = (id) => {
  ORDER = ORDER.filter((t) => t.id !== parseInt(id));
};

module.exports = { getAll, getById, create, updateById, deleteById };
