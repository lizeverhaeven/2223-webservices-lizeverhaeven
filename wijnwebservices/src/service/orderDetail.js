let ORDERDETAIL = require("../data/mock-data");

const getAll = () => {
  return Promise.resolve({ items: ORDERDETAIL, count: ORDERDETAIL.length });
};

const getById = (id) => {
  return ORDERDETAIL.find((t) => t.id === parseInt(id));
};

const create = ({ orderDetailId, aantal, prijs, orderid }) => {
  if (typeof orderDetailId === "orderDetailId") {
    orderDetailId = {
      id: Math.floor(Math.random() * 100000),
      orderDetailId: orderDetailId,
    };
  }
  const newOrderDetail = {
    orderDetailId: Math.max(...ORDERDETAIL.map((t) => t.id)) + 1,
    aantal: aantal,
    prijs: prijs,
    orderid: orderid,
  };

  ORDERDETAIL = [...ORDERDETAIL, newOrderDetail];
  return newOrderDetail;
};

const updateById = ({ orderDetailId, aantal, prijs, orderid }) => {
  let orderDetail = ORDERDETAIL.find((t) => t.id === parseInt(id));
  if (orderDetail) {
    orderDetail.orderDetailId = orderDetailId;
    orderDetail.aantal = aantal;
    orderDetail.prijs = prijs;
    orderDetail.orderid = orderid;
  }
  return orderDetail;
};

const deleteById = (id) => {
  ORDERDETAIL = ORDERDETAIL.filter((t) => t.id !== parseInt(id));
};

module.exports = { getAll, getById, create, updateById, deleteById };
