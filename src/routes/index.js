'use strict';

const food = require('./food');
const login = require('./login');
const logout = require('./logout');
const administrator = require('./administrator');
const middleware = require('../commons/middleware');

function routes(app) {
  app.use(middleware.upercase);
  app.use(middleware.trimQuery);
  app.use('/api/food', food);
  app.use('/api/login', login);
  app.use('/api/logout', logout);
  app.use('/api/administrator', middleware.decoded, administrator);
}

module.exports = routes;
