import {catchAsyncError} from "../middlewares/catchAsynError.js";
import ErrorHandler from '../middlewares/errorMidelWare.js';
import {User} from '../models/userSchema.js'
import {generateToken} from '../utils/jwtToken.js';
import cloudinary from 'cloudinary'
export const patientRegister = catchAsyncError(async(req,res,next)=>{
   const {firstName, lastName, email, phone, password, gender, dob, nic, role,}= req.body;
   if(!firstName|| !lastName|| !email|| !phone|| !password|| !gender|| !dob|| !nic|| !role) {
    return next(new ErrorHandler("Please fill full form ", 400));
   }
   let user = await User.findOne({email})
   if(user){
    return next(new ErrorHandler("User already register",400))
   }
   user = await User.create({
    firstName, 
    lastName, 
    email, 
    phone, 
    password, 
    gender, 
    dob, 
    nic, 
    role,
   });
   generateToken(user, "user Registered",200, res)
});

export const login = catchAsyncError(async(req,res,next)=>{
    const { email, password, confirmPassword, role} = req.body;
    if(!email || !password || !confirmPassword|| !role){
        return next(new ErrorHandler("Please Provide All Details", 400));
    }
    if(password !== confirmPassword){
        return next(new ErrorHandler("Password and confirmPassword is not match"
        ))
    }
    const user =await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("User not found",400));
    }
    const isPasswordMatch = await user.comparePassword(password)
    // if(!isPasswordMatch){
    //     return next(new ErrorHandler("Invalid Email or password", 400))
    // }
    if(role !== user.role){
        return next(new ErrorHandler("User is not found with this role"))
    }
    generateToken(user, "user login successfully",200, res)
});
export const addNewAdmin = catchAsyncError(async(req, res, next)=>{
    const {
        firstName, 
        lastName, 
        email, 
        phone, 
        password, 
        gender, 
        dob, 
        nic,  
    }= req.body;
    if(!firstName|| !lastName|| !email|| !phone|| !password|| !gender|| !dob|| !nic) {
        return next(new ErrorHandler("Please fill full form ", 400));
       }
      const isRegistered = await User.findOne({email}) ;
      if(isRegistered){
        return next(new ErrorHandler(` ${isRegistered.role} with this Email Already Exists`));
      }
      const admin = await User.create({firstName, lastName, email, phone, password, gender, dob, nic, role:"Admin"});
      res.status(200).json({
        success: true,
        message: "New Admin Registered",
    });
    });

    export const getAllDoctors  = catchAsyncError(async(req,res,next)=>{
        const doctors = await User.find({role : "Doctor"});
        res.status(200).json({
            success: true,
            doctors,
        });
    });
    export const getUserDetails = catchAsyncError(async(req,res,next)=>{
        const user = req.user;
        res.status(200).json({
            success: true,
            user,
        });
    });

    export const logoutAdmin = catchAsyncError(async(req,res,next)=>{
        res.status(200).cookie("adminToken","",{
            httpOnly : true,
            expires: new Date(Date.now()),
        }).json({
            success : true,
            message : "Admin Loged out Successfully",
        });
    });

    export const logoutPatient = catchAsyncError(async(req,res,next)=>{
        res.status(200).cookie("patientToken","",{
            httpOnly : true,
            expires: new Date(Date.now()),
        }).json({
            success : true,
            message : "Patient Loged out Successfully",
        });
    });

    export const addNewDoctor = catchAsyncError(async(req,res,next)=>{
        if(!req.files || Object.keys(req.files).length ===0){
            return next (new ErrorHandler("Doctor Avatar Required",400));
        }

        const {docAvatar}= req.files;
        const allowedFormats = ["image/png", "image/jpeg","image/webp"];
        if(!allowedFormats.includes(docAvatar.mimetype)){
            return next(new ErrorHandler("File formate is not supported",400));
        }
        const {
            firstName, 
            lastName, 
            email, 
            phone, 
            password, 
            gender, 
            dob, 
            nic,
            doctorDepartment,
        } = req.body;
        if(
            !firstName|| 
            !lastName|| 
            !email|| 
            !phone|| 
            !password|| 
            !gender|| 
            !dob|| 
            !nic||
            !doctorDepartment
        ){
            return next( new ErrorHandler("Please porvide full details",400));
        }
      const isRegistered = await User.findOne({email});
      if(isRegistered){
        return next(new ErrorHandler(`${isRegistered.role} already registered with this email`,
            400
        ));
      }
      const cloudinaryResponse = await cloudinary.uploader.upload(docAvatar.tempFilePath);
      if(!cloudinaryResponse || cloudinaryResponse.error  ){
        console.error("Cloudinary Error",
            cloudinaryResponse.error || "Unknown Cloudinary Error"
        );
      }
      const doctor = await User.create({
            firstName, 
            lastName, 
            email, 
            phone, 
            password, 
            gender, 
            dob, 
            nic,
            doctorDepartment,
            role : "Doctor",
            docAvtar :{
                public_id: cloudinaryResponse.public_id,
                url:cloudinaryResponse.secure_url
            },
      });
      res.status(200).json({
        success: true,
        message: "New Doctor Registered",
        doctor
      });
    });