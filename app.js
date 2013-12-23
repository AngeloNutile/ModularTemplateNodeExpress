/* CMS.JS */

var port = process.env.PORT || 3000;
var express = require('express');
var app = express();

/* Your Modules */
var login = require('./lib/login');
var registration = require ('./lib/registration');
var users = require('./lib/users');
var contents = require ('./lib/contents');

app.use(login);
app.use(registration);
app.use(users);
app.use(contents);

app.listen(port);

console.log('listening on port:'+port);



