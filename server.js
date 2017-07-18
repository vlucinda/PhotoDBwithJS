//src/server.js
/*jshint esversion: 6 */

//Check that the server is on
console.log("this means it's working");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

 //create database variable to direct browser to Mongo
var db;

MongoClient.connect('mongodb://administrator:hU731Kewnb@ds011439.mlab.com:11439/photographydb', (err, database) => {
    if (err) return console.log(err);
    //use listen method to create server and allow it to communicate with browser
    app.listen(3000, function () {
        console.log('listening on 3000');
    });
});


app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
    console.log('req.body');
});

app.post('/Jordan', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/');
  });
});