const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('Users');
const keys = require('../config/keys');
const pass = encodeURIComponent("Abhi@1234");

mongoose.connect('mongodb://abhinav:${pass}@ds011419.mlab.com:11419/devconnector');
require('dotenv').config();
const jwtOptions ={
jwtFormRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
secretOrkey : process.env.SECRET
};

const strategy = new JwtStrategy(jwtOptions, function (payload, done) {
    // ...
});
module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
        .then(user => {
            if(user){
                  
            }
        })
    })
    );
};