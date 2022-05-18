const express = require('express');
const db = require('./config/mongoose')
const PORT = 8000;
const app = express();




app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }
    console.log("Server is up and running!");
})