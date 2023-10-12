const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Session'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
