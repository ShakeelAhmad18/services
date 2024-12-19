const jwt=require('jsonwebtoken')
const ayncHandler=require('express-async-handler')
const bcrypt=require('bcryptjs')
const ServiceProvider = require('../models/serviceProviderModel')

//generate Token
const generateToken=(id)=>{

    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'1d'})

}

const registerProvider=ayncHandler( async (req,res)=>{
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


module.exports={
    registerProvider
}