var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("express requested")
  res.render('index', { title: 'Express' });
});

router.get("/asdf", function(req, res, next) {
  console.log("yes");
  res.send("asdf");
})

module.exports = router;
