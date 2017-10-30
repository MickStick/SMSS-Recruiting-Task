var express = require('express');
var router = express.Router();
var pp = require('passport');
var jwt = require('jsonwebtoken');
var hex = require('sha256');
var mailer = require('nodemailer');
const port = process.env.port || 4444;

var User = require('../model/Users');
var UserPwd = require('../model/UserPwd');

var transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'smsshaw01@gmail.com',
      pass: 'Smssrecruit'
    }
  });

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
            status: "user"

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

router.put('/update', pp.authenticate('jwt-bearer', { session: false }), (req, res, next) => {
    let newUser = new User({
        id: 100000 + count,
        username: req.body.uname,
        fname: req.body.fname,
        lname: req.body.lname,
        propic: null,
        email: req.body.email,
        status: "user"

    });

    User.updateUser(newUser, (err, result) => {
        if(err){
            throw err;
            console.log(err);
            res.json({success : false, msg : "Update Error!!"});
        }else{
            if(!result.nModified){
                console.log("User Not Update. DB Error!!");
                res.json({success : false, msg : 'User Not Update. DB Error!!'});
            }else{
                res.json({
                    success : true, 
                    msg : 'User Updated Successfully!!',
                    result: result
                });
            }
        }
    });
});

router.get('/report/password',(req, res, next) => {
    res.json({msg:"This actually does nothing. This link is for test purposes"});
});

router.post('/password/reset/request', (req, res, next) => {
    var mailOptions = {
        from: '"Get It Done" <smsshaw01@gmail.com>',
        to: req.body.email,
        subject: 'Reset Password Request',
        html:   '<style>'
                +'body{width: 100vh; border: 1px solid; padding: 2mm; '
                +'background: ghostwhite; box-shadow: 4px 4px 10px rgba(0,0,0,0.2);}'
                +'a{color: lightblue; text-decoration: none;}'
                +'p{font-size: 14px}'
                +'footer{position: absolute; bottom: 0%;}'
                +'footer > p{font-size: 8px;}'
                +'footer > p > label{font-size: 36px; font-weight: 600;}'
                +'</style>'
                +'<body><h1 style="text-align: center;"> Reset Your Password</h1> <br>'
                +'<p>A password reset request was sent from your account'
                +' that is connect to this email, '+req.body.email+'. <br>'
                + 'If this request was made by you then click '
                +'<a href="http://localhost:'+port+'/password/reset/'+req.body._id+'"'
                +' style="color: lightblue; text-decoration: none;">here. </a>'
                +' If you didn\'t make this request that click '
                +'<a href="http://localhost:'+port+'/report/password">this.</a> </p><br>'
                +'<footer><p><label>Get It Done</label><br>'
                +'This is just a recruitment assignment and not an actually webapp/company.'
                +' <br><small>Get it Done &copy;2017</small></p></footer></body>'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
              console.log(error);
              res.json({success : true, msg : "Request failed to send!"});
        } else {
              console.log('Password Reset Request Made By: '+req.body._id+
              '\nEmail sent: ' + info.response);
              res.json({
                  success : true,
                  msg: "Your request has been sent to " +req.body.email+ 
                  ".\n Please check your email for the request and follow the link."
                });
        }
    });
});

router.get('/password/reset/:id',(req, res, next) => {
    User.getUserByObjectId(req.params.id, (err, results) => {
        if(err){
            throw err;
            console.log(err);
            res.json({success : false, msg : "Error!!"});
        }else{
            if(!results){
                console.log("Error: No such user");
                res.json({Success : false, mag: "Error: No Such User!!"});
            }else{
                res.json({
                    success : true,
                    msg: "User Found, Please Reset Password",
                    name : results.fname + " " + results.lname
                });
            }
        }
    });
});

router.post('/password/reset', pp.authenticate('jwt-bearer', { session: false }), (req, res, next) =>{
    User.getPwdByObjectId(req.params.id, (err, results) => {
        if(err){
            throw err;
            console.log(err);
            res.json({success : false, msg : "DataBase Error"});
        }else{
            PWD = new UserPwd({
                id : results.id,
                password : hex(req.body.oldPass)
            });
            
            UserPwd.getPwdById(results.id, (err, presult) =>{
                UserPwd.compPwd(pword, pwd.password, (err, isMatch) => {
                    if(!isMatch){
                        console.log("Previous Email Does not match the one entered");
                    }else{
                        UserPwd.updatePwd(PWD,(err, results) => {
                            if(err){
                                throw err;
                                console.log(err);
                                res.json({success : false, msg : "Reset Failed!!"});
                            }else{
                                if(!results.nModified){
                                    console.log("Password was not updated. DB ERROR!!");
                                    res.json({success : false, msg : 'Password was not updated. DB ERROR!!'});
                                }else{
                                    res.json({
                                        success : false, 
                                        msg : 'Password Reset Successfully'
                                    });
                                }
                            }
                        });
                    }
                });
            });
        }
    });
});

router.post('/password/reset/:id', (req, res, next) => {
    console.log("params: " + req.params.id);
    User.getUserByObjectId(""+req.params.id, (err, results) => {
        if(err){
            throw err;
            console.log(err);
            res.json({success : false, msg : "DataBase Error"});
        }else{
            PWD = new UserPwd({
                id : results.id,
                password : hex(req.body.newPass)
            });

            UserPwd.updatePwd(PWD,(err, results) => {
                if(err){
                    throw err;
                    console.log(err);
                    res.json({success : false, msg : "Reset Failed!!"});
                }else{
                    if(!results.nModified){
                        console.log("Password was not updated. DB ERROR!!");
                        res.json({success : false, msg : 'Password was not updated. DB ERROR!!'});
                    }else{
                        res.json({
                            success : false, 
                            msg : 'Password Reset Successfully'
                        });
                    }
                }
            });
        }
    });
});




module.exports = router;