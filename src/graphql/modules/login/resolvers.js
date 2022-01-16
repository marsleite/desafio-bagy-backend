const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
require('dotenv').config();

module.exports = {
  Mutation: {
    login: async (_, args) => {
      const { email, password } = args;
      let { token } = args;
      // procurar usuário pelo email e senha informados
      const user = await new PrismaClient().user.findUnique({
        where: {
          email,
        },
      });
      if (!user || user.password !== md5(password)) {
        throw new Error('Usuário ou senha inválidos');
      }
      token = jwt.sign({ id: user.id, email: user.email }, 'secret_bagy', {
        expiresIn: '1d',
        algorithm: 'HS256',
      });

      console.log(token);
      return {
        ...user,
        token,
      };
    },
  },
};
