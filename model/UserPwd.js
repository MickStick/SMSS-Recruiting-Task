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

module.exports.getPwdById = (id, callback) => {
    UserPwd.findOne({id : id }, callback);
}

module.exports.addPwd = (pwd, callback) => {
    pwd.save(callback);
}

module.exports.updatePwd = (pwd, callback) => {
    UserPwd.update(
        {
            id : pwd.id
        },
        {
            $set : {
                "password" : pwd.password
            }
        },
        {
            upsert: false
        },
        callback
    );
}

module.exports.compPwd = (pwd, hash, callback) => {
    var Pwd = hex(pwd);
    if (Pwd == hash) {
        callback(null, true);
    } else {
        callback(null, false);
    }
}