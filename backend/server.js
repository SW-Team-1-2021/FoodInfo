const express = require('express');
const server = express();
const db = require('./src/config/mongodb');

db.connect();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/alimentos', (req,res)=>{
  res.send("<h1>tabla</h1>");
});

const port = process.env.PORT || 8080;

require('./src/routes')(server);

server.listen(port);
console.log(`Magic happens on port ${port}`);
