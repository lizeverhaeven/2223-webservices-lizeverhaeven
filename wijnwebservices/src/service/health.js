const Package = require("../../package.json");

const ping = () => ({ pong: true });

const getVersion = () => ({
  version: PackageJSON.version,
  name: PackageJSON.name,
  env: process.env.NODE_ENV,
});

module.exports = { ping, getVersion };
