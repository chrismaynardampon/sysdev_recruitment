const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Python');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

/*
Commands to run the application:
npm init -y
npm install express
node AMPON-Stage-1.js
*/
