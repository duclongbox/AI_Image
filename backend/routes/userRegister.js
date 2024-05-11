const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();// Load environment variables from .env file
const router = express.Router();
//database schema
const User = new mongoose.Schema({
    name:{type:String,requires:true},
    password:{type:String,requires:true},
   
})

const Postschema = mongoose.model('User',User);
module.exports = router
