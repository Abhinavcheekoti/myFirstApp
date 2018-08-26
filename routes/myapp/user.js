var express = require('express');
 var router = express.Router();
 var userModel = require("../../schemas/user");
router.get("/",function(req,res,next){
    console.log("here!");
    userModel.find({}, function(err,docs){
        if(err) console.log(err);
        else {
            console.log('docs',docs);
            res.render('userList',{users: docs  });
            


        }
    })
})
module.exports = router;