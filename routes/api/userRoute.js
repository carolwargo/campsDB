const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addOrder,

} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:studentId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/users/:userId/orders
router.route('/:userId/orders').post(addOrder);

module.exports = router;
