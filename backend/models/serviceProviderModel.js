const mongoose=require('mongoose')
const bycrypt=require('bcryptjs')

const serviceProviderSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'Please Add Name'],
        },
        email:{
           type:String,
           required:[true,'Please add valid Eamil'],
           unique:true,
           match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please Enter a valid Email"
        ]
        },
        password:{
            type:String,
            required:true,
            minLength:[8,'Pasdword must be 8 character']
        },
        profilePic:{
            type:Object,
            default:{url:'https://avatar.iran.liara.run/public/boy'},
        },
        role:{
            type:String,
            required:true,
            default:'Service Provider'
        }
    },
    {
        timestamps:true
    }
)

serviceProviderSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }

    const salt=await bycrypt.genSalt(10)
    const hashPassword=await bycrypt.hash(this.password,salt)
    this.password=hashPassword;
    next();

})

const ServiceProvider=mongoose.model('ServiceProvider',serviceProviderSchema)
module.exports=ServiceProvider;



