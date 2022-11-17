let KLANT = require("../data/mock-data");

const getAll = () => {
  return Promise.resolve({ items: KLANT, count: KLANT.length });
};

const getById = (id) => {
  return KLANT.find((t) => t.id === parseInt(id));
};

const create = ({
  klantId,
  voornaam,
  achternaam,
  geboortedatum,
  email,
  adresId,
}) => {
  if (typeof klantId === "klantId") {
    klantId = {
      id: Math.floor(Math.random() * 100000),
      klantId: klantId,
    };
  }
  const newKlant = {
    klantId: Math.max(...KLANT.map((t) => t.id)) + 1,
    voornaam: voornaam,
    achternaam: achternaam,
    geboortedatum: geboortedatum,
    email: email,
    adresId: adresId,
  };

  KLANT = [...KLANT, newKlant];
  return newKlant;
};

const updateById = ({
  klantId,
  voornaam,
  achternaam,
  geboortedatum,
  email,
  adresId,
}) => {
  let klant = KLANT.find((t) => t.id === parseInt(id));
  if (klant) {
    klant.klantId = klantId;
    klant.voornaam = voornaam;
    klant.achternaam = achternaam;
    klant.geboortedatum = geboortedatum;
    klant.email = email;
    klant.adresId = adresId;
  }
  return klant;
};

const deleteById = (id) => {
  KLANT = KLANT.filter((t) => t.id !== parseInt(id));
};

module.exports = { getAll, getById, create, updateById, deleteById };
