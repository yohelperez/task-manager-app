//file of the server routes
const express = require('express');
const router = express.Router(); //object to enter routes

const Task = require('../models/task'); //model to be able to make searches to the DB

router.get('/', (req, res) => {
    Task.find(function(err, tasks){     //function to find all registers in the DB
        console.log(tasks);
    });
    res.json({
        status: 'API works!'
    });

});


module.exports = router;
