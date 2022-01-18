const { PrismaClient } = require('@prisma/client');
const md5 = require('md5');

class UserMiddleware {
  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }

  // async alreadyExists() {
  //   const user = await this.getByEmail();
  //   if (user) throw new Error('User already exists');
  // }

  async getByEmail() {
    const user = await new PrismaClient().user.findUnique({
      where: {
        email: this.email,
      },
    });
    if (!user) throw new Error('User not found');
    if (user.password !== md5(this.password)) throw new Error('Invalid password');
    return user;
  }
}

module.exports = { UserMiddleware };
