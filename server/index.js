const cors = require('cors');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema');
const { note, notes } = require('./resolvers/query');
const { newNote, updateNote, deleteNote } = require('./resolvers/mutation');

const app = express();
app.use(cors());

const root = {
  note,
  notes,
  newNote,
  updateNote,
  deleteNote,
};

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    rootValue: root,
    schema: schema,
  }),
);

module.exports = app;
