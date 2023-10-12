const express = require('express');
const router = express.Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addOrder,
} = require('../../controllers/userController.js');

// Import your auth middleware
const { authMiddleware } = require('../../utils/auth');

// Apply CORS middleware
const cors = require('cors');
router.use(cors());

// /api/users
router.route('/')
  .get(authMiddleware, async (req, res) => {
    try {
      const users = await getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .post(async (req, res) => {
    try {
      const user = await createUser(req.body);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// /api/users/:userId
router.route('/:userId')
  .get(authMiddleware, async (req, res) => {
    try {
      const user = await getSingleUser(req.params.userId);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
  .delete(authMiddleware, async (req, res) => {
    try {
      await deleteUser(req.params.userId);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// /api/users/:userId/orders
router.route('/:userId/orders')
  .post(authMiddleware, async (req, res) => {
    try {
      const order = await addOrder(req.params.userId, req.body);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
