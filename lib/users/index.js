var express = require('express');
var app = module.exports = express();
var usersApi = require('../users-api');

app.get('/users', function(req,res) {
	usersApi.all(function(err,users){
		res.send(users);
	});
});
