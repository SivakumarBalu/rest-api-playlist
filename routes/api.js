const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//GET Method route
router.get('/ninjas', (req, res, next) => {
    Ninja.geoNear({
        type: "Point", 
        coordinates:[parseFloat(req.query.lng), parseFloat(req.query.lat)]
    },{maxDistance: 100000, spherical: true}).then((ninjas) => {
        res.send(ninjas);
    });
});

//POST Method route
router.post('/ninjas', (req, res, next) => {
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

//PUT Method route
router.put('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Ninja.findOne({_id: req.params.id}).then((ninja) => {
            res.send(ninja);
        });
    });
});

//GET Method route
router.delete('/ninjas/:id', (req, res, next) => {
    Ninja.findByIdAndRemove({_id: req.params.id}).then((ninja) => { 
        res.send(ninja);
    });
});

//export the route to express app
module.exports = router;