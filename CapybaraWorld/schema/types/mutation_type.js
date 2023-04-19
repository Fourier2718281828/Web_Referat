const { CapybaraType } = require('./capyabara_type');

const { 
    deleteCapybaraByName,
    addCapybara,
    updateCapybara,
    deleteCapybara,
  } = require('../../DB/DB');

const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLID, 
    GraphQLList, 
    GraphQLNonNull, 
} = require('graphql');

const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createCapybara: {
        type: CapybaraType,
        args: {
          name: { type: GraphQLNonNull(GraphQLString) },
          type: { type: GraphQLNonNull(GraphQLString) },
          favouriteFood: { type: GraphQLNonNull(new GraphQLList(GraphQLString)) },
          photo: { type: GraphQLString }
        },
        resolve: (_, { name, type, favouriteFood, photo }) => {
            return addCapybara(name, type, favouriteFood, photo);
        }
      },
      updateCapybara: {
        type: CapybaraType,
        args: {
          id: { type: GraphQLNonNull(GraphQLID) },
          name: { type: GraphQLString },
          type: { type: GraphQLString },
          favouriteFood: { type: new GraphQLList(GraphQLString) },
          photo: { type: GraphQLString }
        },
        resolve: (_, args) => {
            return updateCapybara(args);
        }
      },
      deleteCapybara: {
        type: GraphQLString,
        args: {
          name: { type: GraphQLNonNull(GraphQLString) }
        },
        resolve: (_, { name }) => {
            return deleteCapybaraByName(name);
        }
      }
    }
});

module.exports = {
    MutationType
}