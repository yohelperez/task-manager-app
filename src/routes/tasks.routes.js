//file of the server routes
const express = require('express');
const router = express.Router(); //object to enter routes

router.get('/', (req, res) => {
    res.json({
        status: 'API works!'
    });

});


module.exports = router;
