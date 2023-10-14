//const { AuthenticationError } = require('apollo-server-express');
const { Profile} = require('../models');
//const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
  profiles: async () => {
    return Profile.find();
  },
  profile: async (parent, { profileId }) => {
    return Profile.findOne({ _id: profileId });
  },
  },

  Mutation: {
    addProfile: async (parent, { name }) => {
      return Profile.create({ name });
    },
    addOder: async (parent, { profileId, order }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        {
          $addToSet: { orders: order },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeProfile: async (parent, { profileId }) => {
      return Profile.findOneAndDelete({ _id: profileId });
    },
    removeOrder: async (parent, { profileId, order }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { orders: order } },
        { new: true }
      );
    },

   /* addUser: async (parent, { firstname, lastname, email, password }) => {
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
    */
  },
};

module.exports = resolvers;
