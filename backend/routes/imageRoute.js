const mongoose = require('mongoose');
const express = require('express');
const { OpenAI } = require('openai'); // Corrected class name
require('dotenv').config(); // Load environment variables from .env file

const router = express.Router();

// config the openai api
const openai = new OpenAI(process.env.OPENAI_API_KEY); 

router.route('/').get((req, res) => {
    res.send('This is OpenAI key route');
});
router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        // Use images.generate for image creation (correct function)
        const response = await openai.images.generate({
            model: 'dall-e-2',
            prompt,
            n: 1, // Number of images to generate (default: 1)
            size: "1024x1024", // Image size (default: 1024x1024)
            response_format: 'b64_json', // Base64 encoded JSON with image data
        });

        const imageData = response.data.data[0].b64_json; // Extract image data
        res.status(200).json({ photo: imageData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message }); // Send error message for debugging
    }
}); 

module.exports = router
