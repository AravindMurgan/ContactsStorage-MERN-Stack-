const express = require('express');
const router = express.Router();

// route     GET api/contacts/
// desc      Get all users contacts//
// access     Private//
router.get('/',(req,res)=>{
    // res.send('Get all contacts')
    res.send('Get all Users and Contacts')
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


