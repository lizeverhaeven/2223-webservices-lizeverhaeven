let WIJN = require("../data/mock-data");

const getAll = () => {
  return Promise.resolve({ items: WIJN, count: WIJN.length });
};

const getById = (id) => {
  return WIJN.find((t) => t.id === parseInt(id));
};

const create = ({ wijnId, naam, land, jaar, aantalInStock }) => {
  if (typeof wijnId === "WijnId") {
    wijnId = {
      id: Math.floor(Math.random() * 100000),
      wijnId: wijnId,
    };
  }
  const newWijn = {
    wijnId: Math.max(...WIJN.map((t) => t.id)) + 1,
    naam: naam,
    land: land,
    jaar: jaar,
    aantalInStock: aantalInStock,
  };

  WIJN = [...WIJN, newWijn];
  return newWijn;
};

const updateById = ({ wijnId, naam, land, jaar, aantalInStock }) => {
  let wijn = WIJN.find((t) => t.id === parseInt(id));
  if (wijn) {
    wijn.wijnId = wijnId;
    wijn.naam = naam;
    wijn.land = land;
    wijn.jaar = jaar;
    wijn.aantalInStock = aantalInStock;
  }
  return wijn;
};

const deleteById = (id) => {
  WIJN = WIJN.filter((t) => t.id !== parseInt(id));
};

module.exports = { getAll, getById, create, updateById, deleteById };
