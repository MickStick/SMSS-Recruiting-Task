var express = require('express');
var router = express.Router();
var pp = require('passport');
var jwt = require('jsonwebtoken');
var hex = require('sha256');

var User = require('../model/Users');
var UserPwd = require('../model/UserPwd');



router.get('/', (req, res, next) => {
    User.count({}, (err, result) => {
        if (err) {
            res.send("Count Error: " + err);
        } else {

        }
        res.send("User Count: " + result);
    });

});

//Registration
router.post('/register', (req, res, next) => {
    var count;
    User.count({}, (err, result) => {
        if (err) {
            console.log(err);
        }
        count = result;
        let newUser = new User({
            id: 100000 + count,
            username: req.body.uname,
            fname: req.body.fname,
            lname: req.body.lname,
            propic: null,
            email: req.body.email,
            posts: 0

        });

        let newPwd = new UserPwd({
            id: newUser.id,
            password: hex(req.body.pword)
        });

        User.addUser(newUser, (err, user) => {
            if (err) {
                res.json({ success: false, msg: "User Failed To Register", id: newUser.id });
                console.log(err);
                console.log("ID: " + newUser.id + "\nFisrt Name: " + newUser.fname + "\n User Count: " + count);
            } else {
                UserPwd.addPwd(newPwd, (err, pwd) => {
                    if (err) {
                        res.json({ success: false, msg: "Password Failed To Save" });
                        console.log(err);
                    } else {
                        res.json({ success: true, msg: "User Registered and Password Saved" });
                    }
                });
            }
        });
    });


});


//Authentication
router.post('/auth', (req, res, next) => {
    var uname = req.body.uname;
    var pword = req.body.pword;

    User.getUserByUname(uname, (err, user) => {
        if (err) {
            return res.json({
                success: false,
                msg: "Authentication Error"
            });
            console.log(err);
        } else {
            if (!user) {
                return res.json({
                    success: false,
                    msg: "Username or Password Incorrect"
                });
            } else {
                console.log("User ID: " + user.id);
                UserPwd.getPwdById(user.id, (err, pwd) => {
                    if (err) {
                        return res.json({
                            success: false,
                            msg: "Authentication Error"
                        });
                        console.log(err);
                    } else {
                        if (!pwd) {
                            return res.json({
                                success: false,
                                msg: "Username or Password Incorrect"
                            });
                        } else {
                            console.log("Password typed: " + hex(pword));
                            console.log("Password in DB: " + pwd.password)
                            UserPwd.compPwd(pword, pwd.password, (err, isMatch) => {
                                if (err) {
                                    return res.json({
                                        success: false,
                                        msg: "Authentication Error"
                                    });
                                    console.log(err);
                                } else {
                                    if (isMatch) {
                                        console.log("User Object: " + user);
                                        const token = jwt.sign({ data: user }, require('../model/DBConfig').secret, {
                                            expiresIn: 604800 //expires in a week
                                        });

                                        res.json({
                                            success: true,
                                            token: 'Bearer ' + token,
                                            user: user
                                        });
                                    } else {
                                        res.json({
                                            success: false,
                                            msg: "Username or Password Incorrect"
                                        });
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
    });
    //res.send("User Authentication");
});

//Profile
router.get('/profile', pp.authenticate('jwt-bearer', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
    //res.send("User Profile");
});




module.exports = router;