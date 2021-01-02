const express = require('express');
var router = express.Router();
var xml = require('xml');

router.get('/login', function(req, res, next){
    res_data = {msg: "Hey There!"};
    if(req.query.response_type == 'xml'){
        res.set('Content-Type', 'text/xml');
        res.send(xml(res_data));
    }
    else{
        res.json(res_data);
    }
});


module.exports = router;