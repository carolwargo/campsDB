const db = require('./connection');
const { User, Product, Category } = require('../../models');

db.once('open', async () => {

  await Category.deleteMany();

  const category = await Category.insertMany([
    { name: 'Individual' },
    { name: 'Group' },
    { name: 'Single' },
    { name: 'Package' },
   
  ]);
  
  console.log('categories seeded');


  await Product.deleteMany();
  const product = await Product.insertMany([
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

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    confirmPassword: 'password12345',
    isConsentGiven: true,
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345',
    confirmPassword: 'password12345',
    isConsentGiven: true,
   
  });

  await User.create({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: 'password123',
   
  });
  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });
  
  await User.create({
    firstName: 'Carol',
    lastName: 'Wargo',
    email: 'carolwargo@gmail.com',
    password: 'password12345'
  });

  console.log('users seeded');


  process.exit();
});
