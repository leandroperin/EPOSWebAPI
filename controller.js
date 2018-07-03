'use strict';

exports.gett = function(req, res) {
  const readLastLines = require('read-last-lines');
  readLastLines.read('temp_log.txt', 1)
              .then((lines) => {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({temp: lines}));

                console.log("Temperature GET: " + lines + " ºC");
              });
};

exports.sett = function(req, res) {
  var new_temp = req.query.temp;

  const fs = require('fs');

  fs.appendFileSync('temp_log.txt', "\n" + new_temp);

  console.log("Temperature SET: " + new_temp + " ºC");
};
