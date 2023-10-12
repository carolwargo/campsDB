const router = require('express').Router();
const {
  getOrders,
  getSingleOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('../../controllers/orderController.js');

// /api/orders
router.route('/')
  .get(async (req, res) => {
    try {
      const orders = await getOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .post(async (req, res) => {
    try {
      const order = await createOrder(req.body);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// /api/orders/:orderId
router.route('/:orderId')
  .get(async (req, res) => {
    try {
      const order = await getSingleOrder(req.params.orderId);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .put(async (req, res) => {
    try {
      const order = await updateOrder(req.params.orderId, req.body);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .delete(async (req, res) => {
    try {
      await deleteOrder(req.params.orderId);
      res.json({ message: 'Order deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
