'use strict';

const food = require('./food');
const login = require('./login');
const middleware = require('../commons/middleware');

function routes(app) {
  app.use(middleware.upercase);
  app.use(middleware.trimQuery);
  app.use('/api/food', food);
  app.use('/api/login', login);
}

module.exports = routes;
