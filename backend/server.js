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

//-------------------------------------------------
//---------Descomentar solo en el deploy-----------
//
//app.use(express.static(path.join(__dirname, 'build')));
//
//app.get('/ui/*', (req, res) => {
//  res.sendFile(path.join(__dirname, 'build/index.html'), err => {
//    if (err)
//      res.status(500).send(err);
//  });
//});
//
//-------------------------------------------------
//-------------------------------------------------

require('./src/routes/index.js')(app);

app.listen(port, () => console.log(`Magic happens on port ${port}`));
