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

  const favoriteLanguage = 'Python';
  const query = 'INSERT INTO programming_languages (favorites) VALUES (?)';

  db.query(query, [favoriteLanguage], (err, result) => {
    if (err) {
      console.error('Error inserting favorite language:', err.stack);
      return;
    }
    console.log(`Favorite programming language '${favoriteLanguage}' inserted with ID: ${result.insertId}`);
  });
});

app.get('/', (req, res) => {
    res.send('');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/*
MYSQL COMMANDS:
CREATE DATABASE sysdev_recruitment;
USE sysdev_recruitment;
CREATE TABLE programming_languages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  favorites VARCHAR(255)
);

Commands to run the application:
npm install mysql
node AMPON-Stage-2.js
*/
