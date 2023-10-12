const { User, Order } = require('../models');

module.exports = {
  // Get all orders
  async getOrders(req, res) {
    try {
      const orders = await Order.find();
      res.json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a order
  async getSingleOrder(req, res) {
    try {
      const order = await Order.findOne({ _id: req.params.orderId })
        .select('-__v');

      if (!order) {
        return res.status(404).json({ message: 'No order with that ID' });
      }

      res.json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a order
  async createOrder(req, res) {
    try {
      const order = await Order.create(req.body);
      res.json(order);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a order
  async deleteOrder(req, res) {
    try {
      const order = awaitOrder.findOneAndDelete({ _id: req.params.orderId });

      if (!order) {
        res.status(404).json({ message: 'No order with that ID' });
      }

      await User.deleteMany({ _id: { $in: order.users } });
      res.json({ message: 'Order and users deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a order
  async updateOrder(req, res) {
    try {
      const order = await Order.findOneAndUpdate(
        { _id: req.params.orderId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!order) {
        res.status(404).json({ message: 'No order with this id!' });
      }

      res.json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
