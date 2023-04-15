const express = require('express');
const { initDB } = require('./DB/DB');
const { 
    graphqlHTTP 
} = require('express-graphql');
const { schema } = require('./schema/schema.js');

const server = express();
const PORT = 8000;

server.use('/capybaraworld', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

server.listen(PORT, () => {
    initDB();
    console.log(`Server is running on port ${PORT}`);
});
