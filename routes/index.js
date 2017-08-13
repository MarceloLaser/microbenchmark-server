var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET restaurants */
router.get('/restaurants', function(req, res) {
  var db = req.db;
  var collection = db.get('restaurants');
  collection.find({},{},function(e,docs){
    res.render('restaurants', {
      "restaurants" : docs
    });
  });
});

module.exports = router;
