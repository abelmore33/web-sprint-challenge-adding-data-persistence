const knex = require("knex");
const configurations = require("../knexfile");
const environment = "development";

module.exports = knex(configurations[environment]);
