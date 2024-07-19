import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    menuItems: [{
        type: mongoose.Schema.Types.ObjectId,  
        ref: 'MenuItem'
     }]
});



const Category = mongoose.model('MenuCategory', CategorySchema);
export default Category;
