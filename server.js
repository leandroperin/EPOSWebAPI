var cors = require('cors');

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./routes');
routes(app);

app.listen(port);

console.log('EPOS WebAPI started on port ' + port);
