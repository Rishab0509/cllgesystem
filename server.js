var express = require('express');
var app= express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var request1=require('request-promise');

app.get('/',function(req,res){
res.sendFile('index.html',{root:__dirname});
});
app.get('/login.html',function(req,res){
res.sendFile('login.html',{root:__dirname});
});
app.get('/vendor/jquery/jquery.min.js',function(req,res){
res.sendFile('vendor/jquery/jquery.min.js',{root:__dirname});
});
app.get('/vendor/bootstrap/js/bootstrap.min.js',function(req,res){
res.sendFile('vendor/bootstrap/js/bootstrap.min.js',{root:__dirname});
});
app.get('/js/jqBootstrapValidation.js',function(req,res){
	res.sendFile('js/jqBootstrapValidation.js',{root:__dirname});
});
app.get('/js/freelancer.min.js',function(req,res){
res.sendFile('js/freelancer.min.js',{root:__dirname});
});
app.get('/vendor/bootstrap/css/bootstrap.min.css',function(req,res){
res.sendFile('vendor/bootstrap/css/bootstrap.min.css',{root:__dirname});
});
app.get('/css/freelancer.min.css',function(req,res){
res.sendFile('css/freelancer.min.css',{root:__dirname});
});
app.get('/vendor/font-awesome/css/font-awesome.min.css',function(req,res){
res.sendFile('vendor/font-awesome/css/font-awesome.min.css',{root:__dirname});
});
app.get('/css/login.css',function(req,res){
res.sendFile('css/login.css',{root:__dirname});
});
app.listen(8000,function(){
console.log('server is running at port 8080');
});
