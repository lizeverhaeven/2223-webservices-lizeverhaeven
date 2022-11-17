// src/api/mock-data.js
let CATEGORIE = [
  {
    wijnCatId: 1,
    wijnCatNaam: "Rood",
  },
  {
    wijnCatId: 2,
    wijnCatNaam: "Wit",
  },
];

let WIJN = [
  {
    wijnId: 1,
    naam: "Chateau Margaux",
    land: "Frankrijk",
    jaar: 2010,
    aantalInStock: 10,
  },
  {
    wijnId: 2,
    naam: "Chateau Lafite",
    land: "Frankrijk",
    jaar: 2010,
    aantalInStock: 10,
  },
];

let SMAAK = [
  {
    smaakId: 1,
    smaakNaam: "Zoet",
  },
  {
    smaakId: 2,
    smaakNaam: "Droog",
  },
];

let ORDERDETAIL = [
  {
    orderDetailId: 1,
    aantal: 2,
    prijs: 10,
    orderid: 1,
  },
  {
    orderDetailId: 2,
    aantal: 1,
    prijs: 10,
    orderid: 2,
  },
];

let ORDER = [
  {
    orderId: 1,
    orderDatum: "2020-01-01",
    klantId: 1,
    adresid: 1,
  },
  {
    orderId: 2,
    orderDatum: "2020-01-01",
    klantId: 2,
    adresid: 2,
  },
];

let KLANT = [
  {
    klantId: 1,
    voornaam: "Jan",
    achternaam: "Jansen",
    geboortedatum: "1990-01-01",
    email: "janjansen@test.be",
    adresId: 1,
  },
  {
    klantId: 2,
    voornaam: "Piet",
    achternaam: "Pietersen",
    geboortedatum: "1990-01-01",
    email: "PietPieters@test.com",
    adresId: 2,
  },
];

let ADRES = [
  {
    adresId: 1,
    stad: "Rotterdam",
    postcode: "1234AB",
    straat: "Straat 1",
    huisnummer: "1",
    klantId: 1,
  },
  {
    adresId: 2,
    stad: "Amsterdam",
    postcode: "7899AB",
    straat: "Straat 2",
    huisnummer: "2",
    klantId: 2,
  },
];

module.exports = { CATEGORIE, WIJN, SMAAK, ORDERDETAIL, ORDER, KLANT, ADRES };
