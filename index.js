//import the required Node modules
const express = require('express');
//import the router
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//Create the instance of Express
const app = express();

//connect to DB
//mongoose.connect('mongodb://siva:celeron@ds147480.mlab.com:47480/express2');
mongoose.connect('mongodb://localhost:9000/ninjago');
mongoose.Promise = global.Promise;

//Middleware for bodyParser
app.use(bodyParser.json());

//Middleware for routes
app.use('/api',routes);

//error handling Middleware
app.use((err, req, res, next) => {
    //console.log(err);
    res.status(422).send({error: err.message});
});
//setup port for server
const PORT = process.env.PORT || 4000;
app.listen(PORT,function(){
    console.log(`Server listening on port: ${PORT}`);
});
