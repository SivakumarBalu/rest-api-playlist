const express = require('express');
const router = express.Router();

//GET Method route
router.get('/ninjas', (req, res) => {
    res.send({type: 'GET METHOD'});
});

//POST Method route
router.post('/ninjas', (req, res) => {
    res.send({type: 'POST METHOD'});
});

//PUT Method route
router.put('/ninjas', (req, res) => {
    res.send({type: 'PUT METHOD'});
});

//GET Method route
router.delete('/ninjas', (req, res) => {
    res.send({type: 'DELETE METHOD'});
});

//export the route to express app
module.exports = router;