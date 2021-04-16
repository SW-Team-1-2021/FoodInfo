'use strict';

function saveFood(req, res) {
  console.log(req.body);
  return res.status(200);
}

module.exports = {
    saveFood
};