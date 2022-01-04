const express = require("express");
const cors = require('cors');
require("dotenv").config();
const connectDB = require("./back_end/config/mongodb");
const app = express();
const http = require('http');
const server = http.createServer(app)

// facebook auth :
const passport = require('passport')
const facebookStrategy = require('passport-facebook').Strategy
const session = require('express-session')

// connect to database with mongodb:
connectDB()

// init passport :
app.use(session({ 
    secret : 'secretKey',
    saveUninitialized : true,
    resave : false
}))

app.use(passport.initialize())
app.use(passport.session())

// make facebook Strategy :
passport.use(new facebookStrategy({
    clientID : "1631059897234576",
    clientSecret : "8e6a9c6402cd3dd1a7915d5da60d07bd",
    callbackURL : "http://localhost:3001/facebook/auth",
    profileFields : ['name', 'email', 'gender']
}, function (token, refreshToken, profile, done) {
    console.log(profile)
    return done(null, profile)
}))

app.use(express.json())
app.use(cors())

// declaring url endpoints :
app.use("/api/admins", require("./back_end/routes/admins"))
app.use("/api/tags", require("./back_end/routes/tags"))
app.use("/api/staffs", require("./back_end/routes/staffs"))
app.use("/api/clients", require("./back_end/routes/clients"))
app.use("/api/posts", require("./back_end/routes/posts"))
app.use("/api/comments", require("./back_end/firebase/comments/routes/comments"))

// public route for groups (testing) : 
app.use("/api/groups", require("./back_end/routes/groups"))

// Authentification using social networks :
app.get("/facebook/auth", passport.authenticate('facebook', { scope : 'email' }))
app.get("/facebook/callback", passport.authenticate('facebook', {
    successRedirect : '/profile',
    failureRedirect : '/failed'
}))
app.get("/profile", (req, res) => {
    res.send("You re a valid user")
})
app.get("/failed", (req, res) => {
    res.send("Failed User Request !!!")
})

// express sessions functions :
passport.serializeUser(function (user, done) {
    done(null, user)
})
passport.deserializeUser(function(id, done) {
    return done(null, id)
})

// start the server
server.listen(3001, () => {console.log("the server is started")});