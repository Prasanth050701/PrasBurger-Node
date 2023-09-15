var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.query("select * from newdish", function(err,rows,fields){
        if(err) throw err;
        res.send(rows);
        console.log(rows);
    })
});

module.exports = router;
