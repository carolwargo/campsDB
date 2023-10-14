const { AuthenticationError } = require('apollo-server-express');
const { User} = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, {userId }) => {
      return User.findOne({_id:userId});
    },
   
  },
  Mutation: {
    addUser: async (parent, { firstname, lastname, email, password }) => {
      const user = await User.create({ firstname, lastname, email, password });
      const token = signToken(user);
      console.log(token, user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      console.log("======user======");
      console.log(user);
      console.log("======user======");
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      console.log('======document user======');
      console.log(token, user);
      console.log('======document user======');
      return { token, user };
      
    },
    
  },
};

module.exports = resolvers;
