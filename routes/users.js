const express=require('express');
const router=express.Router();
console.log("User File");
const usersController=require('../controllers/users_controller');


router.get('/profile',usersController.profile);

router.get('/sign-up',usersController.signUp);
router.get('/sign-in',usersController.signIn);
router.post('/create',usersController.create);
module.exports=router;