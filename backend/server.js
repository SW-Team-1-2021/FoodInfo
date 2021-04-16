const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
//const cors = require('cors');
const db = require('./src/config/mongodb');

const methodOverride = require('method-override');

//db.connect();

//const bodyParser = require('body-parser');
//app.use(cors());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

const port = process.env.PORT || 8082;

//require('./src/routes')(app);

app.listen(port);
console.log(`Magic happens on port ${port}`);

//middleware

app.use(methodOverride('_method'));
//routes
app.use(require('./src/routes/index'));
app.use(require('./src/routes/aliment'));