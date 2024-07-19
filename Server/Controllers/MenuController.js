import Item  from "../Model/ItemShema.js";
import Category from "../Model/CaregorySchema.js";




export const AddItems=async (req, res) => { 
    try {
        const { title, category, price, menuItems  } = req.body;

        const items = await Promise.all(menuItems.map(async (value) => {
            const item = new Item({ title: value });
            await item.save();
            return item._id;
          }));
        
          const categorylist = new Category({
            title: title,
            category: category,
            price: price,
            menuItems: items,
          });

          await categorylist.save();


        res.status(201).json({
            status:"success",
            message:"FoodItem Feched Successfully",
            data:categorylist
        });
    } catch (error) {
        console.error('Error adding category with items:', error);
        res.status(500).json({
            error:"failure",
            message: 'Server Error'
         });
    }
};


export const getItems = async (req, res) => {
    try {
        const categories = await Category.find().populate('menuItems');
        res.status(200).json({
            status:"success",
            message:"FoodItem Feched Successfully",
            data:categories
        });

    } catch (error) {
        console.error('Error fetching categories with items:', error);
        res.status(500).json({
             error:"failure",
             message: 'Server Error'
         });
    }
};


export default {
    AddItems,
    getItems
  };