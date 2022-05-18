const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/hms');

const db= mongoose.connection;

db.on('error', console.error.bind("Error connecting to DB"));

db.once('open', function() {
    console.log("Connected to DB");
})


module.exports = db;