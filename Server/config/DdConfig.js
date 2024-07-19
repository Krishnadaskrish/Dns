import mongoose from 'mongoose';


const uri = process.env.CONNECTION_STRING || "mongodb://0.0.0.0:27017/food-court"

mongoose.connect(uri)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error:', error));

export default mongoose;    