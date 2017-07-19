//src/server.js
/*jshint esversion: 6 */

//Check that the server is on
console.log("this means the server's working");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

//create database variable to direct browser to Mongo
var db;

MongoClient.connect('mongodb://vlucinda:hU731Kewnb@ds011439.mlab.com:11439/photographydb', (err, database) => {
    if (err) return console.log(err);
    db = database;
    //use listen method to create server and allow it to communicate with browser
    app.listen(3000, function () {
        console.log('listening on 3000');
    });
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//makes folder: public available to public view
app.use(express.static('public'));

app.get('/', (req, res) => {
    db.collection('books').find().toArray((err, result) => {
        if (err) return console.log(err);
        res.render('index.ejs', {
            books: result
        });
        console.log('Bibliography shown');
    });
});

app.post('/index', (req, res) => {
    db.collection('books').save(req.body, (err, result) => {
        if (err) return console.log(err);
        console.log('saved to database');
        res.redirect('/');
    });
});

app.put('/index', (req, res) => {
    db.collection('books')
        .findOneAndUpdate({
            description: 'Levant'
        }, {
            //looks for descriptions that include the word Levant
            $set: {
                description: req.body.description
            }
        }, {
            //looks for latest entry
            sort: {
                _id: -1
            },
            upsert: true
        }, (err, result) => {
            if (err) return res.send(err)
            res.send(result)
        });
});

app.delete('/index', (req, res) => {
    db.collection('books').findOneAndDelete({
        description: req.body.description;
    }, (err, result) => {
        if (err) return res.send(500, err);
        res.send('A bibliography item was deleted');
    });
});
