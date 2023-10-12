const db = require('./connection');
const { User, Session } = require('../models');

db.once('open', async () => {

  await Session.deleteMany();

  const sessions = await Session.insertMany([
    {
      name: 'Individual Catching Single Session',
      price: 75.00,
    },
    {
      name: 'Individual Catching Session Package',
      price: 350.00,
   
    },
    {
        name: 'Group Catching Single Session',
      price: 150,
   
    },
    {
        name: 'Group Catching Session Package',
      price: 600,
    },
    {
        name: 'Virtual Evaluation',
      price: 75.00,
    },
    {
      name: 'Winter session 1 ',
      price: 75.00,
    },
    {
        name: 'Winter session 2 ',
        price: 75.00,
      },
  ]);

  console.log(' sessions seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    cellPhone: '1111111111',
    password: 'password12345',
    orders: [
      {
        sessions: [sessions[0]._id, sessions[0]._id, sessions[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    cellPhone: '1111111111',
    password: 'password12345'
    
  });

  await User.create({
    firstName: 'Carol',
    lastName: 'Wargo',
    email: 'carolwargo@gmail.com',
    cellPhone: '4437711726',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
