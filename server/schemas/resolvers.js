const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const fetch = require('node-fetch');

const resolvers = {
  Query: {
    users: async () => {
      return user.find()
    },
    user: async (parent, {email }) => {
      return user.findOne({ email });
    },
    
  },

  Mutation: {
    addUser: async (parent, { firstname, lastname, cellphone, email, password }) => {
      const user = await user.create({ firstname, lastname, cellphone, email, password});
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await user.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
   
  },
};

module.exports = resolvers;
