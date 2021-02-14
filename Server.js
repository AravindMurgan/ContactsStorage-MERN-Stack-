const express = require('express');
// const connectDB = require('./config/db');

const app = express();


const { sup, how } = require("./middle");

app.use(sup);

// //Connect DB//
// connectDB();

app.get('/',(req,res)=>
    res.json({
        msg: 'Welcome to ContactKeeper API ...',
        name:'Aravind is here',
        role:'Front End Developer'
    })
)

// // /// Define Routes///
// app.use('/api/users', require('./routes/users'));
// app.use('/api/auth',require('./routes/auth'));
// app.use('/api/contacts',require('./routes/contacts'))

// const PORT = process.env.PORT || 5000;

// app.listen(PORT,()=> console.log(`Server started on port ${PORT}`));


// const http = require('http');
// console.log(http.STATUS_CODES);

app.get("/",(req,res)=>{
    res.send('Hello Aravind here')
})

// app.get("/old",(req,res)=>{
//     res.redirect(301,"/new/mynew")
// })

// app.get("/new/mynew",(req,res)=>{
//     res.send('This is a new URL')
// })

/// Middleware - How Express handles a sequence of functions like  GET POST PUT DELETE
app.listen(5000, err => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("listening on port 5000");
  });