import mongoose from "mongoose";


const menuItemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: false
        },
      

    });

const Item = mongoose.model('MenuItem', menuItemSchema);

export default Item;