let SMAAK = require("../data/mock-data");

const getAll = () => {
  return Promise.resolve({ items: SMAAK, count: SMAAK.length });
};

const getById = (id) => {
  return SMAAK.find((t) => t.id === parseInt(id));
};

const create = ({ smaakId, smaakNaam }) => {
  if (typeof smaakId === "smaakId") {
    smaakId = {
      id: Math.floor(Math.random() * 100000),
      smaakId: smaakId,
    };
    if (typeof smaakNaam === "smaakNaam") {
      smaakNaam = {
        id: Math.floor(Math.random() * 100000),
        smaakNaam: smaakNaam,
      };
    }
  }
  const newSmaak = {
    smaakId: Math.max(...SMAAK.map((t) => t.id)) + 1,
    smaakNaam: smaakNaam,
  };

  SMAAK = [...SMAAK, newSmaak];
  return newSmaak;
};

const updateById = ({ smaakId, smaakNaam }) => {
  let smaak = SMAAK.find((t) => t.id === parseInt(id));
  if (smaak) {
    smaak.smaakId = smaakId;
    smaak.smaakNaam = smaakNaam;
  }
  return smaak;
};

const deleteById = (id) => {
  SMAAK = SMAAK.filter((t) => t.id !== parseInt(id));
};

module.exports = { getAll, getById, create, updateById, deleteById };
