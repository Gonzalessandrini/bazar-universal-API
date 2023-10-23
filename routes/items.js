const itemsRouter = require('express').Router()
const Product = require('../models/Product')

itemsRouter.get('/', async (req, res, next) => {
    try {
        const search = req.query.q;
  
        if (!search) {
          const products = await Product.find();
          return res.json(products);
        }
      
        const regex = new RegExp(`^${search}`, 'i'); 
      
        const products = await Product.find({ $or: [{ category: search }, { title: { $regex: regex } }] });
        res.json(products);
    }catch(err){
        next(err)
    }

  })

itemsRouter.get('/:id', async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);
  
      res.json(product);
    } catch (error) {
      console.error('Error al buscar el producto:', error);
      res.status(404).json({ error: 'Producto no encontrado' })
    }
  })

module.exports = itemsRouter