 var express = require('express');
 var router = express.Router();
router.get('/',function(req,res,next){
    res.render('layout');
})
router.post("/",function(req,res,next){
    console.log("req.body is ", req.body);
    let name = req.body.name;
    let id = req.body.id;
    let roomNo = req.body.roomno;




    res.redirect("/");
})
 module.exports = router;
