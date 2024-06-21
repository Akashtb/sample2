const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');
const dotenv = require('dotenv')
const session = require('express-session');
const authRouter = require('./Routes/authRoutes');
const connectDb = require('./Config/db');
const passportAuthentication = require('./Middleware/passport');
const passport = require('passport');

const app = express();
dotenv.config();
app.use(express.json());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   credentials: true,            //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// }

// Middleware

// app.use(cors(corsOptions));


// MongoDB connection

passportAuthentication(passport)
// Routes
app.use('/auth', authRouter);
app.get('/',(req,res)=>{
  res.send('Welcome to the API');
})
// const PORT = process.env.PORT || 8000;
app.listen(8001, () => {
  connectDb()
  console.log(`Server running on port 8001`)
});
