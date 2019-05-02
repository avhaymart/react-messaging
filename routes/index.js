var express = require('express');
var router = express.Router();

router.get("/asdf", function(req, res, next) {
  console.log("yes");
  res.send("asdf");
})

module.exports = router;
