//import the required Node modules
const express = require('express');
//import the router
const routes = require('./routes/api');
//Create the instance of Express
const app = express();

//Middleware for routes
app.use('/api',routes);

//setup port for server
const PORT = process.env.PORT || 4000;
app.listen(PORT,function(){
    console.log(`Server listening on port: ${PORT}`);
});
