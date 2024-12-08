import mongoose  from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
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
        minLength : [10, "Phone Number contain exact 10 numbers"]
    },
    message:{
        type : String,
        required : true,
        minLength : [10, "Message must contain 10 characters"]
    },
})

export const Message = mongoose.model("message",messageSchema);