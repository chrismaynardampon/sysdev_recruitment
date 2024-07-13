const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'sysdev_recruitment'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

app.get('/', (req, res) => {
  res.send('');
});

app.get('/programming-languages', (req, res) => {
  const query = 'SELECT * FROM programming_languages';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error retrieving data:', err.stack);
      return res.status(500).send('Error retrieving data from database.');
    }

    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
Commands to run the application:
node AMPON-Stage-3.js
*/
