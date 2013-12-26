var express = require('express');
var app = module.exports = express();
var usersApi = require('../contents-api');

app.set('views', __dirname);
app.set('view engine','jade');

app.get('/contents', function(req,res) {
	usersApi.all(function(err,contents){
		res.send(contents);
	});
});

app.get('/', function(req,res){
	res.redirect('/home');
});

app.get('/home', function(req,res) {
	res.render('home',{pathBootstrap:'/public/bs'});
});

app.get('/about', function(req,res) {
	res.render('about', {title:'About', id:'about',brand:'a'});
});
