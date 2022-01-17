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
    updateProduct: async (_, args) => {
      const { token, id, ...data } = args;
      new TokenJwt().verify(token);

      const updated = new PrismaClient().product.update({
        where: {
          id,
        },
        data: {
          ...data,
        },
      });
      if (!updated) {
        throw new Error('Product not found');
      }
      return updated;
    },
  },
};
