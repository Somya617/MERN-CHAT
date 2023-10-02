const express = require('express');
const dotenv= require('dotenv');
const jwt = require('jsonwebtoken');
const cors =require('cors');
const User = require('./models/User');
const mongoose = require('mongoose');
dotenv.config();
mongoose.connect(process.env.MONGO_URL, (err) => {
    if (err) throw err;
  });
  const jwtSecret = process.env.JWT_SECRET;

  const app = express();
  app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  }));

console.log(process.env.MONGO_URL);
const app = express();
app.get('/test',(req,res) =>{
res.json('test ok');
});
app.post('/register',async (req,res) =>
{
    const {username, password} = req.body;
    
    const createdUser = await User.create({
        username:username,
        password:Password,
      });
      jwt.sign({userId:createdUser._id,username}, jwtSecret, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token, {sameSite:'none', secure:true}).status(201).json({
          id: createdUser._id,
        });
    });
});

app.listen(4040);