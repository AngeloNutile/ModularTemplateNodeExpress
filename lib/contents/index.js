var express = require('express');
var app = module.exports = express();
var usersApi = require('../contents-api');

app.get('/contents', function(req,res) {
	usersApi.all(function(err,contents){
		res.send(contents);
	});
});
