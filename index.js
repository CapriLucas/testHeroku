const express = require('express');
const bodyParser = require('body-parser');
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// GLOBAL VARIABLES

app.use((req,res,next)=>{
  next();
});

// ROUTES


app.use(require('./routes/main.js'));

// START SERVER

app.listen(PORT,(req,res)=>{
  console.log("Server on port:", PORT);
});

module.exports = app;