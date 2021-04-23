'use strict';

const food = require('./food');
const middleware = require('../commons/middleware');

function routes(app) {
  app.use(middleware.upercase);
  app.use('/api/food', food);
}

module.exports = routes;
