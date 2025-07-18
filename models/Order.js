import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  cartItems: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
    }
  ],
  subtotal: {
    type: Number,
    required: true,
  },
  gst: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
 orderType: {
  type: String,
  required: true,
  enum: ['eat-in', 'take-away'],
},

serviceType: {
  type: String,
  required: true,
  enum: ['table', 'counter'],
},

  OrderDate: {
    type: Date,
    default: Date.now,
  }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
