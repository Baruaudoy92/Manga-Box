const Pool = require("pg").Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "Bangla2024",
    port: 5432,
    database:"mangaDB"
  });
  module.exports = pool;