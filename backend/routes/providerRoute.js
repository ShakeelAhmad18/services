const express=require('express');
const { registerProvider } = require('../controllers/providerController');

const router=express.Router();

router.post('/registerProvider',registerProvider);


module.exports=router;