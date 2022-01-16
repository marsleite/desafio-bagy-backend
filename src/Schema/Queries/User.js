const { PrismaClient } = require('@prisma/client');
const { GraphQLList } = require('graphql');
const { UserType } = require('../TypeDefs/User');

const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return new PrismaClient().user.findMany();
  },
};

module.exports = { GET_ALL_USERS };
