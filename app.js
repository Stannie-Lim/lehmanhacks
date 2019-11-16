var express               = require("express"),
    bodyParser            = require("body-parser"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose"),
    User                  = require("./models/user"),
    app                   = express();


mongoose.connect("mongodb://localhost/social_app");

app.use(require("express-session")({
    secret: "we must kill this love its sad but its true",
    resave: false,
    saveUninitialized: false
}));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.set("view engine", "ejs");

//########## routes
app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", function(req, res){
    res.render("secret");
});

//############ user authentication
app.get("/register", function(req, res){
    res.render("register");
});




//app.listen(process.env.PORT, process.env.IP);

app.listen(3000, process.env.IP);