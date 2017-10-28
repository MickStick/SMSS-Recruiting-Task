var mong = require('mongoose');
var hex = require('sha256');
var db = require('./DBConfig');

//User DB Schema

var UserPwdSchema = mong.Schema({
    id: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    password: {
        type: String,
        required: true
    }
});

var UserPwd = module.exports = mong.model('UserPwds', UserPwdSchema);

module.exports.getPwdById = function(id, callback) {
    UserPwd.findOne({id : id }, callback);
}

module.exports.addPwd = function(pwd, callback) {
    pwd.save(callback);
}

module.exports.compPwd = function(pwd, hash, callback) {
    var Pwd = hex(pwd);
    if (Pwd == hash) {
        callback(null, true);
    } else {
        callback(null, false);
    }
}