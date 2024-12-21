const jwt=require('jsonwebtoken')
const asyncHandler=require('express-async-handler')
const bcrypt=require('bcryptjs')
const ServiceProvider = require('../models/serviceProviderModel')
const { get } = require('mongoose')

//generate Token
const generateToken=(id)=>{

    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})

}

const registerProvider=asyncHandler( async (req,res)=>{
    const {name,email,password}=req.body;

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Fill All the Fields')
    }

    const emailExist=await ServiceProvider.findOne({email})

    if(emailExist){
        res.status(400).json({error:'Email Already Exist'})
    }

    if(password.length < 8){
        return res.status(400).json({error:'Password must be 8 charator'})
    }
    
    //create new provider

    const provider=await ServiceProvider.create({
        name,
        email,
        password
    })

    //generate token 
    const token=generateToken(provider._id);

    //send HTTP only cookie
    res.cookie('token',token,{
       path:'/',
       httpOnly:true,
       expires:new Date(Date.now() + 1000 * 86400), // 1 day
       sameSite:'none',
       secure:true
    })

    if(provider){

        res.status(201).json({provider})

    }else{

        res.status(401).json({error:'Invalid user Data'})

    }

})


const signProvider=asyncHandler( async (req,res)=>{
     const {email,password}=req.body;

     if(!email || !password){
        return res.status(400).json({error:'Fill all fields'})
     }

     const emailExist=await ServiceProvider.findOne({email})

     if(!emailExist){
        return res.status(400).json({error:'Email does not Exist Please Sign up'})
     }

     if(password.length < 8){
        return res.status(400).json({error:'Password must be 8 charactor'})
     }
      
     //generate token
     const token=generateToken(emailExist._id)

     //check password is Correct
     const isMatch=await bcrypt.compare(password,emailExist.password)

     if(isMatch){
        res.cookie('token',token,{
          path:'/',
          httpOnly:true,
            expires:new Date(Date.now() + 1000 * 86400), // 1 day
            sameSite:'none',   
            secure:true
        })}

        if(emailExist && isMatch){
            const {_id,name,email,profilePic,token,role}=emailExist;
            
            res.status(200).json({
                _id,
                name,
                email,
                profilePic,
                token,
                role
            })}else{
                return res.status(400).json({error:'Invalid Email or Password'})
            }
})

const signoutProvider=asyncHandler(async(req,res)=>{
    res.clearCookie('token')
    res.json({
        message:'Signout Successfully'
    })
})


const loginStatus=asyncHandler(async(req,res)=>{

    const token=req.cookies.token;

    if(!token){
        return res.json({error:'False'})
    }

    //verify token
    const varify=jwt.verify(token,process.env.JWT_SECRET)

    if(varify){
        return res.json({success:'True'})
    }else{
        return res.json({error:'False'})
    }

})

//get provider
const getProvider=asyncHandler(async (req,res)=>{

    const provider=await ServiceProvider.findById(req.provider._id);

    if(provider){
        res.json(provider)
    }else{
        res.status(404)
        throw new Error('Not Found')
    }


})




module.exports={
    registerProvider,
    signProvider,
    signoutProvider,
    loginStatus,
    getProvider
}