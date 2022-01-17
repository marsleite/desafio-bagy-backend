const { PrismaClient } = require('@prisma/client');
const md5 = require('md5');
// const { UserMiddleware } = require('../../../middleware/user/user.middleware');

module.exports = {
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
  },
  Mutation: {
    createUser: async (_, args) => {
      const {
        firstName, lastName, email, password, cpf, birthDay, ...addresses
      } = args;
      const userData = {
        firstName, lastName, email, password: md5(password), cpf, birthDay,
      };
      // await new UserMiddleware(email).alreadyExists();

      const newUser = await new PrismaClient().user.create({
        data: {
          ...userData,
          address: {
            create: {
              ...addresses,
            },
          },
        },
      });
      return newUser;
    },
    updateUser: async (_, args) => {
      const {
        id, firstName, lastName, email, password, cpf, birthDay,
      } = args;
      const userData = {
        firstName, lastName, email, password: md5(password), cpf, birthDay,
      };
      const updatedUser = await new PrismaClient().user.update({
        where: {
          id,
        },
        data: {
          ...userData,
        },
      });
      return updatedUser;
    },
    updateAddress: async (_, args) => {
      const { id, ...address } = args;
      const updatedAddress = await new PrismaClient().address.update({
        where: {
          clientId: id,
        },
        data: {
          ...address,
        },
      });
      return updatedAddress;
    },
    deleteUser: async (_, args) => {
      const { id } = args;
      const deletedUser = await new PrismaClient().user.delete({
        where: {
          id,
        },
      });
      return deletedUser;
    },
  },
};
