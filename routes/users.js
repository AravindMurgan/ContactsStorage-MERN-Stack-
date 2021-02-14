const express = require('express');
const { validationResult } = require('express-validator');
const router = express.Router();

const User = require('../model/User');


// $route  POST(api/users)//
// @desc   Register a user//
// &access Public
router.post('/',[
    check('name','name is required').not().isEmpty(),
    check('email','email is required').isEmail(),
    check('password','password should be atleast min 6 characters').isLength({min:6})
],(req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        
    }
})

module.exports = router;

