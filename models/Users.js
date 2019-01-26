const mongoose = require('mongoose');
const Schema =mongoose.Schema;
const pass = encodeURIComponent("Abhi@1234");
mongoose.connect('mongodb://abhinav:${pass}@ds011419.mlab.com:11419/devconnector');
//Create Schema
const UserSchema = new Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
avatar:{
    type:String,
    
},
date:{
    type:Date,
    default:Date.now
},

});
module.exports = User =mongoose.model('Users',UserSchema);
