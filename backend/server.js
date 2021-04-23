const express = require('express');
const app = express();
const db = require('./src/config/mongodb');
const port = process.env.PORT || 8082;

db.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./src/routes/index.js')(app);

app.listen(port, () => console.log(`Magic happens on port ${port}`));
