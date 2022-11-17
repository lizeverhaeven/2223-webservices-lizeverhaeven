let ADRES = require("../data/mock-data");

const getAll = () => {
  return Promise.resolve({ items: ADRES, count: ADRES.length });
};

const getById = (id) => {
  return ADRES.find((t) => t.id === parseInt(id));
};

const create = ({ adresId, stad, postcode, straat, huisnummer, klantId }) => {
  if (typeof adresId === "adresId") {
    adresId = {
      id: Math.floor(Math.random() * 100000),
      adresId: adresId,
    };
  }
  const newAdres = {
    adresId: Math.max(...ADRES.map((t) => t.id)) + 1,
    stad: stad,
    postcode: postcode,
    straat: straat,
    huisnummer: huisnummer,
    klantId: klantId,
  };

  ADRES = [...ADRES, newAdres];
  return newAdres;
};

const updateById = ({
  adresId,
  stad,
  postcode,
  straat,
  huisnummer,
  klantId,
}) => {
  let adres = ADRES.find((t) => t.id === parseInt(id));
  if (adres) {
    adres.adresId = adresId;
    adres.stad = stad;
    adres.postcode = postcode;
    adres.straat = straat;
    adres.huisnummer = huisnummer;
    adres.klantId = klantId;
  }
  return adres;
};

const deleteById = (id) => {
  ADRES = ADRES.filter((t) => t.id !== parseInt(id));
};

module.exports = { getAll, getById, create, updateById, deleteById };
