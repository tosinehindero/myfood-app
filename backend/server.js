require('dotenv').config();
const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');

const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(mongoSanitize());
app.use(xss());


// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });


  //global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

  
const port = process.env.port || 30001
app.listen(port, ()=>{console.log('Hello Server is running')});
