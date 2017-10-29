var mong = require('mongoose');
var db = require('./DBConfig');

//User DB Schema

var UserSchema = mong.Schema({
    id: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    username: {
        type: String
    },
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    propic: {
        type: String
    },
    email: {
        type: String
    },
    status: {
        type: String
    }
});

var User = module.exports = mong.model('User', UserSchema);

module.exports.getUserById = (id, callback) => {
    User.findOne({ id: id }, callback);
}

module.exports.getUserByObjectId = (id, callback) => {
    User.findById({ _id: id }, callback);
}

module.exports.getUserByUname = (Uname, callback) => {
    User.findOne({ username: Uname }, callback);
}

module.exports.getUsersByStatus = (stat, callback) => {
    if (stat == "SuperAdmin") {
        console.log("Restricted");
        return "Restricted";
    } else {
        User.find({ status: stat }, callback);
    }
}

module.exports.addUser = (user, callback) => {
    user.save(callback);
}