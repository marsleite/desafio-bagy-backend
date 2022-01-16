const { PrismaClient } = require('@prisma/client');

class UserMiddleware {
  constructor(data) {
    this.email = data;
  }

  async alreadyExists() {
    const user = await new PrismaClient().user.findUnique({
      where: {
        email: this.email,
      },
    });
    return user;
  }
}

module.exports = { UserMiddleware };
