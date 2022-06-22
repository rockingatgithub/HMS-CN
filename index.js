const express = require('express');
const db = require('./config/mongoose')
const PORT = 8000;
const app = express();
const ejs = require('ejs');
const path = require('path');
const passport = require('./config/passport-local-strategy');
const passGithubStrategy = require('./config/passport-github-strategy');
app.use(require('express-session')({ secret: 'keyboard', resave: true, saveUninitialized: true,  }));

// const router = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.set('views', './views')

app.use(express.urlencoded());

app.use(passport.initialize());
app.use(passport.session());


app.use('/', require('./routes/index'));





// console.log(">>>", process.env.HOME)

app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }
    console.log("Server is up and running!");
})