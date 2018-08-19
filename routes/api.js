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

makeMatch = function(){
    result = {
        "Ingenieria/Tecnologia" : parseInt(Math.random() * 100),
        "Arquitectura" : parseInt(Math.random() * 100),
        "Bellas Artes" : parseInt(Math.random() * 100),
        "Economia/Administración" : parseInt(Math.random() * 100),
        "Agro/Veterinaria" : parseInt(Math.random() * 100),
        "Educación" : parseInt(Math.random() * 100),
        "Ciencias Exactas" : parseInt(Math.random() * 100),
        "Ciencias Sociales" : parseInt(Math.random() * 100),
        "Ciencias de la Salud" : parseInt(Math.random() * 100),
    }
    return result;
};

router.get('/result', function(req, res){
    res.send({
        result : makeMatch()
    })
})


module.exports = router