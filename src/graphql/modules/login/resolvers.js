const md5 = require('md5');
const { TokenJwt } = require('../../../middleware/token/jwtToken');
const { UserMiddleware } = require('../../../middleware/user/user.middleware');
require('dotenv').config();

module.exports = {
  Mutation: {
    login: async (_, args) => {
      const { email, password } = args;
      let { token } = args;
      const user = await new UserMiddleware(email).alreadyExists();

      if (!user || user.password !== md5(password)) {
        throw new Error('Usuário ou senha inválidos');
      }

      token = new TokenJwt().generate({ id: user.id, email: user.email });

      return {
        ...user,
        token,
      };
    },
  },
};
