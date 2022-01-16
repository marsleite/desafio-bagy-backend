const { GraphQLID, GraphQLObjectType, GraphQLString } = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    cpf: { type: GraphQLString },
    birthDay: { type: GraphQLString },
  }),
});

module.exports = { UserType };
