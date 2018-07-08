var bodyParser   = require("body-parser");
var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.render("index");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.get("/mybudget", function(req, res){
    res.render("budget");
});

app.post("/login", function(req, res){
    res.send(req.body.username);
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started");
});
