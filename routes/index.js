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
  //var rid = { "$oid": res.params.identifier };
  var collection = db.get('restaurants');
  collection.findOne({ _id: res.params.identifier }, {}, function(err, docs) {
		if (err){
      res.render("i hate io");
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
