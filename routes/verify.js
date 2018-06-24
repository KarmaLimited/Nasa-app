var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Verify = require('../models/Verify.js');
var passport = require('passport');
require('../config/passport')(passport);

router.post('/', function(req, res, next) {
  Verify.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
// save posts
router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    Verify.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});

// get posts */
router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
    Verify.find(function (err, Verify) {
      if (err) return next(err);
      res.json(Verify);
    });
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});
// get and extract json web token
getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};


module.exports = router;