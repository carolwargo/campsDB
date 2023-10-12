const router = require('express').Router();
const userRoutes = require('./userRoute');
const orderRoutes = require('./orderRoutes');

router.use('/users', userRoutes);
router.use('/orders', orderRoutes);

module.exports = router;
