const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(
  '/api',
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  }),
);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
