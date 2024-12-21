const express=require('express');
const { registerProvider, signProvider, loginStatus, signoutProvider, getProvider } = require('../controllers/providerController');
const protector = require('../middleware/providerMiddleware');

const router=express.Router();

router.post('/registerProvider',registerProvider);
router.post('/loginProvider',signProvider);
router.post('/signoutProvider',signoutProvider);
router.get('/loginstatus',loginStatus)
router.get('/getProvider',protector,getProvider)



module.exports=router;