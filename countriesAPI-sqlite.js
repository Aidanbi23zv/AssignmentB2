var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('Countries');

db.serialize(function(){
    db.run("CREATE TABLE IF NOT EXISTS countries (name TEXT, continent TEXT, population TEXT, flag TEXT)");

    db.run("DELETE FROM countries");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "France", "Europe", "68,170,000", "Red,White,Blue");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Germany", "Europe", "84,480,000", "Black,Red,Yellow");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Peru", "South America", "34,350,000", "Red,White");
});

var express = require('express');
var app = express();

app.get('/countries', function(req,res){
    db.all("SELECT * FROM countries", function(err,rows){
        res.jsonp(rows);
    });
});

app.listen(2001);

console.log("Up and running...");