import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.post('/confirm', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json({ message: 'Order saved', order: savedOrder });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ error: 'Failed to save order' });
  }
});

export default router;
