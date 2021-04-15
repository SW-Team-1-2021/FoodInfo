const express = require('express');
const app = express();
const db = require('./src/config/mongodb');

const port = process.env.PORT || 8082;

app.listen(port);
console.log(`Magic happens on port ${port}`);
