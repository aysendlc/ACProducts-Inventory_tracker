const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'blue555',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'postgres' // replace with your database name
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};