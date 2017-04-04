const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//GET Method route
router.get('/ninjas', (req, res, next) => {
    res.send({type: 'GET METHOD'});
});

//POST Method route
router.post('/ninjas', (req, res, next) => {
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

//PUT Method route
router.put('/ninjas', (req, res, next) => {
    res.send({type: 'PUT METHOD'});
});

//GET Method route
router.delete('/ninjas', (req, res, next) => {
    res.send({type: 'DELETE METHOD'});
});

//export the route to express app
module.exports = router;