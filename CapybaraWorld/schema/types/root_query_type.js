const { CapybaraType } = require('./capyabara_type');

const { 
  getAllCapybaras,
  getCapyByID,
} = require('../../DB/DB');

const { 
    GraphQLObjectType, 
    GraphQLID, 
    GraphQLList, 
    GraphQLNonNull, 
} = require('graphql');

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
      capybaras: {
        type: new GraphQLList(CapybaraType),
        resolve: getAllCapybaras
      },
      capybara: {
        type: CapybaraType,
        args: {
          id: { type: GraphQLNonNull(GraphQLID) }
        },
        resolve: getCapyByID
      }
    }
  });

module.exports = {
    RootQueryType
}