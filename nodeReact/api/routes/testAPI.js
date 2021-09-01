const express = require('express');
var router = express.Router(); 

router.get("/",function(req,res,next){
    res.send("Process of linking react with nodejs.");
})

module.exports = router;