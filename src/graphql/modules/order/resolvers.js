const { PrismaClient } = require('@prisma/client');
const { SendEmail } = require('../../../middleware/email/send.email');

module.exports = {
  Query: {
    orders: () => new PrismaClient().order.findMany(),
    order(_, args) {
      return new PrismaClient().order.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },
  Mutation: {
    createOrder: async (_, args) => {
      const { products, ...orderData } = args;
      const { id, ...newOrder } = await new PrismaClient().order.create({
        data: {
          ...orderData,
        },
      });
      await Promise.all(products.map(async ({ productId, quantity }) => {
        await new PrismaClient().orderProducts.create({
          data: {
            orderId: id,
            productId,
            quantity,
          },
        });
        const { quantity: stock } = await new PrismaClient().product.findUnique({
          where: {
            id: productId,
          },
        });
        await new PrismaClient().product.update({
          where: {
            id: productId,
          },
          data: {
            quantity: stock - quantity,
          },
        });
      }));
      await new SendEmail().send(newOrder);
      return { id, ...newOrder };
    },
    updateOrder: async (_, args) => {
      const { id, ...orderData } = args;
      const updatedOrder = await new PrismaClient().order.update({
        where: {
          id,
        },
        data: {
          ...orderData,
        },
      });
      return updatedOrder;
    },
  },
};
