const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLID, 
    GraphQLList, 
} = require('graphql');

const CapybaraType = new GraphQLObjectType({
    name: 'Capybara',
    fields: {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      type: { type: GraphQLString },
      favouriteFood: { type: new GraphQLList(GraphQLString) },
      photo: { type: GraphQLString }
    }
});

module.exports = {
    CapybaraType
}