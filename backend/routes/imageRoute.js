const mongoose = require('mongoose');
const express = require('express');
const { OpenAI } = require('openai');
require('dotenv').config(); // Load environment variables from .env file

const router = express.Router();

// config the openai api
const openai = new OpenAI(process.env.OPENAI_API_KEY); 

router.route('/').get((req, res) => {
    res.send('This is OpenAI key route');
});
router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body; // parse json data to javascript object
        console.log(prompt);
        // Use images.generate for image creation (correct function)
        const response = await openai.images.generate({
            prompt,
            n: 1, 
            size: "1024x1024", 
             // Base64 encoded JSON with image data
        });
        image_url = response.data[0].url;
        console.log(image_url)
        res.status(200).json({ photo: image_url });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message }); // Send error message for debugging
    }
}); 

module.exports = router
