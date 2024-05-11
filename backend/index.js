const express = require('express');
const cors = require('cors');
const { on } = require('nodemon');
const imageRouter = require('./routes/imageRoute');
const postRouter = require('./routes/userRegister');
const connectDB = require('./database/mongo');
require('dotenv').config();// Load environment variables from .env file
 
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/images', imageRouter);
app.use('/api/posts', postRouter);

//routes
app.get('/', (req, res) => {
    res.send('Hello World');
})

const onListenServer = () => {
    try{
        connectDB(process.env.MONGODB_URL);
        console.log(`Server is running on port 'http://localhost:${process.env.PORT||3000}'`);
    }
    catch(err){
        console.log(err);
    }
}
app.listen(3000,onListenServer);