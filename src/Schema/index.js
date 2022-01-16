const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { GET_ALL_USERS } = require('./Queries/User');

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    getAllUsers: GET_ALL_USERS,
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = { schema };
