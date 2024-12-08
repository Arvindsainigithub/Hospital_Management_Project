import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : true,
        minLength : [3, "First Name must contain at least 3 characters"]
    },
    lastName:{
        type : String,
        required : true,
        minLength : [3, "last Name must contain at least 3 characters"]
    },
    email:{
        type : String,
        required : true,
        validate : [validator.isEmail, "Please provide a valid email"]
    },
    phone:{
        type : String,
        required : true,
        minLength : [10, "Phone Number contain exact 10 numbers"],
        maxLength : [10, "Phone Number contain exact 10 numbers"]
    },
    nic:{
        type : String,
        required : true,
        minLength : [12, "Phone Number contain exact 12 numbers"],
        maxLength : [12, "Phone Number contain exact 12 numbers"]
    },
    dob:{
        type : Date,
        required: [true, "Dob is required"],
    },
    gender: {
        type: String ,
        required:true,
        enum:["Male","Female"],
    },
    password:{
        type: String,
        required:true,
        minLength:[8, "password must constain At Least 8 Character"],
        select: false
    },
    role:{
        type: String,
        required : true,
        enum:["Admin", "Patient", "Doctor"]
    },
    doctorDepartment:{
        type: String
    },
    docAvtar:{
        public_id : String,
        url: String,
    },
});

userSchema.pre("save", async function (next){
    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);

});

userSchema.methods.comparePassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword, this.password)
};

userSchema.methods.genrateJsonWebToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRES,
    })
}

export const User = mongoose.model("User",userSchema);