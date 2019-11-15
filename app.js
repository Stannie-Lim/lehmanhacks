var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/testing", function(req, res){
    res.send("sadas");
});

app.listen(process.env.PORT, process.env.IP);