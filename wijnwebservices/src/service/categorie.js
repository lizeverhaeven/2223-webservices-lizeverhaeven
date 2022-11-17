let CATEGORIE = require("../data/mock-data");

const getAll = () => {
  return Promise.resolve({ items: CATEGORIE, count: CATEGORIE.length });
};

const getById = (id) => {
  return CATEGORIE.find((t) => t.id === parseInt(id));
};

const create = ({ wijnCatId, wijnCatNaam }) => {
  if (typeof wijnCatId === "WijnCatId") {
    wijnCatId = {
      id: Math.floor(Math.random() * 100000),
      wijnCatId: wijnCatId,
    };
    if (typeof wijnCatNaam === "WijnCatNaam") {
      wijnCatNaam = {
        id: Math.floor(Math.random() * 100000),
        wijnCatNaam: wijnCatNaam,
      };
    }
  }
  const newCategorie = {
    wijnCatId: Math.max(...CATEGORIE.map((t) => t.id)) + 1,
    wijnCatNaam: wijnCatNaam,
  };

  CATEGORIE = [...CATEGORIE, newCategorie];
  return newCategorie;
};

const updateById = ({ wijnCatId, wijnCatNaam }) => {
  let categorie = CATEGORIE.find((t) => t.id === parseInt(id));
  if (categorie) {
    categorie.wijnCatId = wijnCatId;
    categorie.wijnCatNaam = wijnCatNaam;
  }
  return categorie;
};

const deleteById = (id) => {
  CATEGORIE = CATEGORIE.filter((t) => t.id !== parseInt(id));
};

module.exports = { getAll, getById, create, updateById, deleteById };
