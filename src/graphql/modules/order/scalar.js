const { GraphQLScalarType } = require('graphql');

// criar um novo tipo de dados para o GraphQL (Scalar) que será um array de objetos
const GraphQLArrayOfObjects = new GraphQLScalarType({
  name: 'ArrayOfObjects',
  description: 'Um array de objetos',
  serialize(value) {
    return value;
  },
});

module.exports = { GraphQLArrayOfObjects };
