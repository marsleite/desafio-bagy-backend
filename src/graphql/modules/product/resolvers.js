const { PrismaClient } = require('@prisma/client');
const { TokenJwt } = require('../../../middleware/token/jwtToken');

module.exports = {
  Query: {
    products: () => new PrismaClient().product.findMany(),
    product(_parent, args) {
      return new PrismaClient().product.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    createProduct: async (_, args) => {
      const { token, ...data } = args;
      // quando o token é invalido quebra a aplicação, verificar somente para retornar o erro
      new TokenJwt().verify(token);
      return new PrismaClient().product.create({
        data: {
          ...data,
        },
      });
    },
  },
};
