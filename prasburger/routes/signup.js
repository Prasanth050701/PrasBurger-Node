var db = require('../db');
var express = require('express');
var router = express.Router();


/ GET home page. /
router.post('/', function(req, res, next) {
  db.connect(function(err){
    if(err) 
    throw err;
    db.query("insert into customers(name,email,password) values(?,?,?)",[
      req.body.name,req.body.email,req.body.password], function(err,result){
      if(err) throw err;
      console.log(result);
      res.send(JSON.stringify("success"))
    })
  })
});
router.post('/',function(req,res,next){
  console.log("successfully added")
});




module.exports = router;