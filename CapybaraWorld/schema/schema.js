const { RootQueryType } = require('./types/root_query_type');
const { MutationType } = require('./types/mutation_type');
const { 
    GraphQLSchema 
} = require('graphql');

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: MutationType
});

module.exports = {
    schema,
}