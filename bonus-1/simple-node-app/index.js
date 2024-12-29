const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  }
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Current time from PostgreSQL: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.send('Error connecting to the database');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
