//import the required Node modules
const express = require('express');
//Create the instance of Express
const app = express();

//sample route to test
app.get('/',function(req, res){
    console.log('GET Method');
    res.send({name:'Yashi'});
});
//setup port for server
const PORT = process.env.PORT || 4000;
app.listen(PORT,function(){
    console.log(`Server listening on port: ${PORT}`);
});
