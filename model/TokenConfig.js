const strat = require('passport-http-jwt-bearer'); //require('passport-jwt').Strategy;
const extract = require('passport-jwt').ExtractJwt;
const User = require('./Users');
const db = require('./DBConfig');

module.exports = function(pp) {
    let opts = {
        jwtFromRequest: extract.fromAuthHeaderAsBearerToken(), //fromHeader('auth'),
        secretOrKey: db.secret
    };

    const Strategy = new strat(db.secret, function(jwt_payload, done) {
        console.log("payload: ", jwt_payload);
        User.getUserByObjectId(jwt_payload.data._id, function(err, user) {
            if (err) {
                return done(err, false)
            } else {
                if (user) {
                    return done(null, user, jwt_payload);
                } else {
                    return done(null, false);
                }
            }
        });
    });
    pp.use(Strategy);


    /*passport.use(new JwtBearerStrategy(
   config.secretOrPublicKey,
   function(token, done) {
     userDb.findById(token.sub, function (err, user) {
       if (err) { return done(err); }
       if (!user) { return done(null, false); }
    //    if(token.exp < Math.floor(Date.now() / 1000))
    //    { 
    //        return done(null, false, 'Token has expired!');
    //    }
       return done(null, user, token);
     });
   }
 )); */
}