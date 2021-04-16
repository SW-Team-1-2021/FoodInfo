'use strict';
const food = require('./food');

function routes(app) {
    app.use('api/food', food);
}

module.exports = routes;