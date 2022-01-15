const { gql, ApolloServer } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');

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
`;

const resolvers = {
  User: {
    address: async (user) => new PrismaClient().address.findUnique(
      {
        where: { clientId: user.id },
      },
    ),
  },
  Query: {
    users: () => new PrismaClient().user.findMany(),
    user(_parent, args) {
      return new PrismaClient().user.findUnique({
        where: {
          id: args.id,
        },
      });
    },
    addresses() {
      return new PrismaClient().address.findMany();
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => console.log(`server running ${url}`));
