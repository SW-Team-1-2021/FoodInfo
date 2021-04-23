const mongoose = require('mongoose');

const uri = 'mongodb+srv://swfood:asd123asd456@swfood.tgjfi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const uri = 'mongodb://localhost:27017/swfood';
async function connect() {
  await mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
  console.log('Data base connected ...');
}

module.exports = {
  connect
};

