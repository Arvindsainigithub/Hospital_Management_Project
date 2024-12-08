import {Message} from "..//models/messageSchema.js"
import { catchAsyncError } from "../middlewares/catchAsynError.js";
import ErrorHandler from "../middlewares/errorMidelWare.js"

export const sendMessage =catchAsyncError( async(req, res, next)=>{
    const {firstName,lastName,email,phone,message}=req.body;
    if(!firstName || !lastName || !phone || !message || !email ){
        return next(new ErrorHandler("Please Fill Full Form", 400));
    };
        await Message.create({firstName,lastName,phone,email,message})
        res.status(200).json({
            success: true,
            message: "Message Send Successfully",
        });    
});

export const getAllMessage = catchAsyncError(async(req,res,next)=>{
    const messages = await Message.find();
    res.statue(200).json({
        success:true,
        messages,
    })
})