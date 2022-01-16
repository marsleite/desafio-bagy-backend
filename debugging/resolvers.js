const { PrismaClient } = require('@prisma/client');
const md5 = require('md5');

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
  Mutation: {
    createUser: async (_, args) => {
      const {
        firstName, lastName, email, password, cpf, birthDay, ...addresses
      } = args;
      const newUser = await new PrismaClient().user.create({
        data: {
          firstName,
          lastName,
          email,
          password: md5(password),
          cpf,
          birthDay,
          address: {
            create: {
              ...addresses,
            },
          },
        },
      });
      return newUser;
    },
  },
};

module.exports = { resolvers };
