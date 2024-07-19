import express from 'express';
const MenuRoute = express.Router()
import MenuController from '../Controllers/MenuController.js'


MenuRoute
.post('/create',MenuController.AddItems)
.get('/get',MenuController.getItems)


export default MenuRoute