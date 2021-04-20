const express = require('express');
const server = express();
const db = require('./src/config/mongodb');
const port = process.env.PORT || 8080;

db.connect();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

require('./src/routes/index.js')(server);

server.listen(port, () => console.log(`Magic happens on port ${port}`));
