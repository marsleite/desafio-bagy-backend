const { PrismaClient } = require('@prisma/client');

module.exports = {
  Query: {
    addresses() {
      return new PrismaClient().address.findMany();
    },
  },
};
