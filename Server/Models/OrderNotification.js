// models/OrderNotification.js
const mongoose = require('mongoose');

const orderNotificationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  cartItems: { type: Object, required: true },
  status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('OrderNotification', orderNotificationSchema);
