var express = require('express');
var router = express.Router();

router.get('/', function (req, res){
    res.send({
        message : "api"
    })
})

router.post('/submit', function(req, res){
    console.log(req.body);
    res.send({
        message : "form"
    })
})

router.get('/result', function(req, res){
    res.send({
        message : 'result'
    })
})


module.exports = router