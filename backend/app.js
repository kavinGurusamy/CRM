const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require("body-parser");
// const port = process.env.PORT || 3000\
const userRoutes = require('./Routes/userroutes')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
app.use(bodyParser.urlencoded({ extended: true })); 
app.use((req, res, next) => {
    // console.log('inside app - use'); console.log(req.body); 
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
  
    next();
    
  });
  

  app.use('/user',userRoutes)

module.exports = app