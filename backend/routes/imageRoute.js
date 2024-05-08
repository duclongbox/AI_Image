const mongoose = require('mongoose');
const express = require('express');
const { OpenAI } = require('openai'); // Corrected class name
require('dotenv').config(); // Load environment variables from .env file

const router = express.Router();

// config the openai api
const openai = new OpenAI(process.env.OPENAI_API_KEY); // Corrected class name

router.route('/').get((req, res) => {
    res.send('This is OpenAI key route');
});
router.route('/').post(async (req, res) => {
    try{
        const prompt = req.body.prompt;
        const responseAI = await openai.createImage({
            prompt,
            n:1, // Number of images to generate
            size: '1024x1024',
            response_format: 'b64_json',
        });
        // response image in format b64_json to user
        res.status(200).json({photo: responseAI.data.data[0].b64_json})
    } catch (error) {
        console.log(error);
        res.status(500).send(response.data.error.message)
    }
}); 

module.exports = router
