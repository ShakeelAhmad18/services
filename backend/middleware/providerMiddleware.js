const ServiceProvider=require('../models/serviceProviderModel')
const jwt=require('jsonwebtoken');
const asyncHandler=require('express-async-handler');
const bcrypt=require('bcryptjs');

const protector=asyncHandler(async (req,res,next)=>{


   const token=req.cookies.token;

   if(!token){
    res.status(401).json({error:'Not Authorized, Please Login Again'})
   }

   //verify token
   const verfied=jwt.verify(token,process.env.JWT_SECRET);

   //get provider ID from token

   const provider=await ServiceProvider.findById(verfied.id).select('-password');

   if(!provider){
       res.status(404).json({error:'Provider Not Found'})
   }

   req.provider=provider;
   next();


})

module.exports=protector;