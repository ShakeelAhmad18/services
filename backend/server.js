const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const providerRoute=require('./routes/providerRoute')


const app=express();
app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
}))


const PORT=5000;


mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT,()=>{
        console.log(`The server is running on PORT ${PORT}`)
    })
})

//middleware
app.use('/api/provider',providerRoute);

app.get('/',(req,res)=>{
   res.send('My backend')
})




/*app.listen(PORT,()=>{
    console.log(`The server is running on PORT ${PORT}`)
})*/