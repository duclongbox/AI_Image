const mongoose = require('mongoose');
const express = require('express');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();// Load environment variables from .env file
const router = express.Router();
//database schema
const Post = new mongoose.Schema({
    name:{type:String,requires:true},
    prompt:{type:String,requires:true},
    photo:{type:String,requires:true},
})

const Postschema = mongoose.model('Post',Post);
module.exports = router
