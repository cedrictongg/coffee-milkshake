// required modules
var express = require('express');
var app = express();
var mongojs = require("mongojs");
var db = mongojs('resumedb', ['resumedb']);
var bodyParser = require("body-parser");

app.use(bodyParser.json());

// dirname tells server where to find files
app.use(express.static(__dirname + "/public"));

// grabs data from resumedb
app.get('/resumedb', function(req, res) {
    db.resumedb.find(function(err, docs) {
        console.log(docs);
        res.json(docs);
    });
    app.post("/resumedb", function(req, res) {
        console.log(req.body);
        db.resumedb.save(req.body, function(err, docs) {
            res.json(docs);
        });
    });
});
// listen on port 80
app.listen(80);
console.log("Server running on port 80");
