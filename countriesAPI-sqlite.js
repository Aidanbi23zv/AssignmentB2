var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('Countries');

var multer = require('multer');
var upload = multer();

db.serialize(function(){
    db.run("CREATE TABLE IF NOT EXISTS countries (name TEXT, continent TEXT, population TEXT, flag TEXT)");

    db.run("DELETE FROM countries");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "France", "Europe", "68,170,000", "Red,White,Blue");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Germany", "Europe", "84,480,000", "Black,Red,Yellow");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Peru", "South America", "34,350,000", "Red,White");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Wales", "Europe", "3,350,000", "Red,White,Green");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Japan", "Asia", "124,500,000", "Red,White");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Australia", "Oceania", "26,64,000", "Red,White,Blue");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Armenia", "Asia", "2,778,000", "Red,Blue,Orange");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Russia", "Europe", "143,350,000", "Red,White,Blue");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Canada", "North America", "40,350,000", "Red,White");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Gabon", "Africa", "2,350,000", "Green,Yellow,Blue");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Yemen", "Asia", "34,450,000", "Red,White,Black");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Argentina", "South America", "46,650,000", "Blue,White,Yellow");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Chile", "South America", "19,630,000", "Red,White,Blue");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "England", "Europe", "59,350,000", "Red,White");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Nigeria", "Africa", "223,800,000", "Green,White");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Kazakhstan", "Asia", "19,950,000", "Blue,Yellow");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Samoa", "Oceania", "225,681", "Red,White,Blue");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Estonia", "Europe", "1,366,000", "Blue,Black,White");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Jamaica", "North America", "2,826,000", "Green,Yellow,Black");

    db.run("INSERT INTO countries (name, continent, population, flag) VALUES (?,?,?,?)", "Indonesia", "Asia", "277,500,000", "Red,White");

});

var express = require('express');
var app = express();
/**
 * @api {get} /countries Display all countries
 * @apiVersion 1.0.0
 * @apiGroup COUNTRIES
 * @apiSuccess {String} Name of the country
 * @apiSuccessExample {json} Success
 * 
 *      HTTP/1.1 200 OK
 *      [{
 *      "name": "France",
 *      "continent": "Europe",
 *      "population": "68,170,000",
 *      "flag": "Red,White,Blue"
 *      },
 *      "name": "Germany",
 *      "continent": "Europe",
 *      "population": "84,480,000",
 *      "flag": "Black,Red,Yellow"
 *      },
 * 
 *      etc...
 * 
 * "}]
 */
app.get('/countries', function(req,res){
    db.all("SELECT * FROM countries", function(err,rows){
        res.jsonp(rows);
    });
});

/**
 * @api {get} /flagcolour Display all countries with white in their flag
 * @apiVersion 1.0.0
 * @apiGroup COUNTRIES
 * @apiSuccess {String} Name of the country
 * @apiSuccessExample {json} Success
 * 
 *      HTTP/1.1 200 OK
 *      [{
 *      "name": "France",
 *      "continent": "Europe",
 *      "population": "68,170,000",
 *      "flag": "Red,White,Blue"
 *      },
 *      "name": "Peru",
 *      "continent": "South America",
 *      "population": "34,350,000",
 *      "flag": "Red,White"
 *      },
 * 
 * 
 *      etc...
 * 
 * "}]
 */
app.get('/flagcolour', function(req,res){
    db.all("SELECT * FROM countries WHERE flag LIKE '%White%'", function(err,rows){
        res.jsonp(rows);
    });
});

app.use(function (req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(2001);

console.log("Up and running...");