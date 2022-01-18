const jwt = require('jsonwebtoken');
const fs = require('fs').promises;

class TokenJwt {
  constructor() {
    this.jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };
  }

  async generate(data) {
    const secret = await fs.readFile('jwt.secret.key', 'utf8');
    return jwt.sign(data, secret, this.jwtConfig);
  }

  async verify(token) {
    const secret = await fs.readFile('jwt.secret.key', 'utf8');
    jwt.verify(token, secret, this.jwtConfig.algorithm);
  }
}

module.exports = { TokenJwt };
