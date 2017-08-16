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

/* GET by ID */
router.get('/restaurants/:identifier', function(req, res){
  var db = req.db;
  var collection = db.get('restaurants');
  collection.findOne({ _id: req.params.identifier }, {}, function(err, docs) {
		if (err){
			res.status(400).send();
		}
		else{
      res.render('restaurants', {
        "restaurants" : docs
      });
			//res.json(docs);
		}
  });
});

module.exports = router;
