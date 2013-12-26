/* app.js */
/* Modular Template Node.js Express Jade */

var appConfig = require('./appConfig.json');

var port = process.env.PORT || appConfig.app.devPort;
var express = require('express');	
var path = require('path');

var app = express();

/* Your Modules */
var login = require('./lib/login');
var registration = require ('./lib/registration');
var users = require('./lib/users');
var contents = require ('./lib/contents');

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/_views');
app.use(express.static(path.join(__dirname, 'public')));

var brand = ' Modular Template Node.js Express Jade '

app.use(login);
app.use(registration);
app.use(users);
app.use(contents);

app.listen(port);

console.log('listening on port:'+port);



