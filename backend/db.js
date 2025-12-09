const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",           // PostgreSQL username
  host: "localhost",           // local machine
  database: "construction_erp", // ERP database
  password: "akhila",     // PostgreSQL password
  port: 5432,                  // default PostgreSQL port
});

module.exports = pool;
