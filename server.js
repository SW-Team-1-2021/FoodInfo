const express = require('express');
const app = express();
const cors = require('cors');
//const path = require('path');
const db = require('./src/config/mongodb');
const port = process.env.PORT || 8082;

db.connect();

app.use(cors());
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({
  limit: '500mb',
  extended: true }));

require('./src/routes/index.js')(app);

app.listen(port, () => console.log(`Magic happens on port ${port}`));
