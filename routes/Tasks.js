var express = require('express');
var router = express.Router();
var pp = require('passport');
var jwt = require('jsonwebtoken');
var hex = require('sha256');

var Task = require('../model/Tasks');



router.get('/', function(req, res, next) {
    Task.count({}, function(err, result) {
        if (err) {
            res.send("Count Error: " + err);
        } else {

        }
        res.send("Task Count: " + result);
    });

});

//Saving posts
router.post('/task', pp.authenticate('jwt-bearer', { session: false }), function(req, res, next) {

});
//Updating posts
router.post('/task/:id', pp.authenticate('jwt-bearer', { session: false }), function(req, res, next) {

});
//Deleting posts
router.delete('/task/:id', pp.authenticate('jwt-bearer', { session: false }), function(req, res, next) {

});

//Saving post comments
router.post('/comment', pp.authenticate('jwt-bearer', { session: false }), function(req, res, next) {

});
//Updating post comments
router.post('/comment/:id', pp.authenticate('jwt-bearer', { session: false }), function(req, res, next) {

});
//Deleting post comments
router.delete('/comment/:id', pp.authenticate('jwt-bearer', { session: false }), function(req, res, next) {

});



module.exports = router;