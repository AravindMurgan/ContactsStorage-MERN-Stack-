const express = require('express');
const app = express();
const connectDB = require('./config/db');



// //Connect DB//
connectDB();

app.get('/',(req,res)=>
    res.json({
        msg: 'Welcome to ContactKeeper API ...',
        name:'Aravind is here',
        role:'Front End Developer'
    })
)

// /// Define Routes///
app.use('/api/users', require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/contacts',require('./routes/contacts'))

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`Server started on port ${PORT}`));

