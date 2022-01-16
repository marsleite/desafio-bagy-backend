const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const { schema } = require('./Schema');

const main = async () => {
  const app = express();
  const PORT = 4000;
  app.use(cors());
  app.use(express.json());

  app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }));

  app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
};

main().catch((error) => console.log(error));
