// models/OrderNotification.js
const mongoose = require('mongoose');

const orderNotificationSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  orderDetails: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' },
  adminComment: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('OrderNotification', orderNotificationSchema);
