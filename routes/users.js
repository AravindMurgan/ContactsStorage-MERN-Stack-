const express = require('express');
const {check, validationResult } = require('express-validator');
const router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');


// $route  POST(api/users)//
// @desc   Register a user//
// &access Public
router.post('/',[
    check('name','name is required').not().isEmpty(),
    check('email','email is required').isEmail(),
    check('password','password should be atleast min 6 characters').isLength({min:6}),
],async (req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        
        return res.status(400).json({errors: errors.array()});
    }

    const {name,email,password}= req.body;
   

    try {
        let user = await User.findOne({email});

        if(user){
            return res.status(400).json({msg:'User already exists'})
        }

        user = new User({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password,salt);

        await user.save();

        res.send('User Saved');
    } catch (error) {
        console.error(error.message);
        res.status(500).send({error:"Server Error"})
    }
    
})

module.exports = router;

