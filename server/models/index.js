const mongoose = require('mongoose');

const User = require('./User');
const Order = require('./Order');
const Profile = require('./Profile');

const initModels = () => {
    mongoose.model('User', User);
    mongoose.model('Order', Order);
    mongoose.model('Profile', Profile);
};

module.exports = {
    User, 
    Order, 
    Profile 
};