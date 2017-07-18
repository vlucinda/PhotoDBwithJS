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

MongoClient.connect('mongodb://vlucinda:hU731Kewnb@ds011439.mlab.com:11439/photographydb', (err, database) => {
    if (err) return console.log(err);
    //use listen method to create server and allow it to communicate with browser
    app.listen(3000, function () {
        console.log('listening on 3000');
    });
});

if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  });
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  db.collection('Jordan').find().toArray((err, result) => {
    if (err) return console.log(err);
    res.render('index.ejs', {books: result});
  });
});

app.post('/Jordan', (req, res) => {
  db.collection('Jordan').save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log('saved to database');
    res.redirect('/');
  });
});