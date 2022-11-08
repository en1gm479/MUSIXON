const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const pwdComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique: true},
    password: {type:String, required:true},
    gender: {type:String, required:true},
    month: {type:String, required:true},
    date: {type:String, required:true},
    year: {type:String, required:true},
    likedSongs: {type:[String], default:[]},
    playlists: {type:[String], default:[]},
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign(
        {_id: this._id, name:this.name, email:this.email},
        process.env.JWTSECRET;
    )
    return token;
}

const User = moongose.model("user",userSchema);
const validate = (user)=>{
    const schema = joi.object({
        name: joi.string().min(3).max(10),required(),
        email: joi.string().email().required(),
        password: pwdComplexity().required(),
        month: joi.string().required(),
        date: joi.string().required(),
        year: joi.string().required(),
        gender: joi.string().valid("Male","Female","Others").required(),
    });
    return schema.validate(user);
}

const User = moongose.model("user",userSchema);

module.exports = {User, validate}