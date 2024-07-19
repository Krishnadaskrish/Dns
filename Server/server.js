import './dotenv.js'
import express from 'express';
import mongoose from './config/DdConfig.js';
import MenuRoute from './Route/MenuRoute.js'
import cors from 'cors'




const app = express();
const port = process.env.PORT || 3002 
app.use(cors());


app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/api',MenuRoute)



app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});