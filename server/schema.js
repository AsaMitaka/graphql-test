const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type User {
        id: ID,
        username: String,
        subscriptions: []
    }

    type 
`);

module.exports = schema;
