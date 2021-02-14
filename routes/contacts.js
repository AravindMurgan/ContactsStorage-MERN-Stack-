const express = require('express');
const router = express.Router();
const auth = require('../routes/auth');
const {check, validationResult } = require('express-validator');

const Contact = require('../model/Contact');
const User = require('../model/User');

// route     GET api/contacts/
// desc      Get all users contacts//
// access     Private//
router.get('/',auth, async (req,res)=>{
        try {
            
            const contacts = await Contact.find({user:req.user.id}).sort({date:-1});
            res.json(contacts);
            
        } catch (error) {
            
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    
})


// route     POST api/contacts/
// desc      Add contacts//
// access     Private//
router.post('/',(req,res)=>{
    res.send('Add contacts')
})


// route     PUT api/contacts/:id
// desc      Update contacts//
// access     Private//
router.put('/:id',(req,res)=>{
    res.send('Update contacts')
})

// route     DEL api/contacts/
// desc      Add contacts//
// access     Private//
router.delete('/:id',(req,res)=>{
    res.send('Delete contacts')
})

module.exports = router;


