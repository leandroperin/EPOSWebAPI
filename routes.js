'use strict';
module.exports = function(app) {
  var readTemp = require('./controller');

  app.route('/gett')
    .get(readTemp.gett);

  app.route('/sett')
    .get(readTemp.sett);
};
