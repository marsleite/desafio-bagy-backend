const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id:  Int
    firstName: String
    lastName: String
    email: String
    password: String
    cpf: String
    birthDay: String
    address: Address
  }

  type Address {
    id: Int
    street: String
    number: Int
    complement: String
    city: String
    state: String
    country: String
    zipCode: String
  }

  type Query {
    users: [User]
    user(id: Int): User
    address(id: Int): Address
    addresses: [Address]
  }

  type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      cpf: String!
      birthDay: String!
      street: String!
      number: Int!
      complement: String!
      city: String!
      state: String!
      country: String!
      zipCode: String!
    ): User
  }
`;

module.exports = { typeDefs };
