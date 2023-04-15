const { CapybaraType } = require('./capyabara_type');

const { encodeImage } = require('../../image_management');

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
        resolve: resolveCapybaras
      },
      capybara: {
        type: CapybaraType,
        args: {
          id: { type: GraphQLNonNull(GraphQLID) }
        },
        resolve: resolveCapybara
      }
    }
  });

function resolveCapybaras() 
{
  const all = getAllCapybaras();
  //all.map(capy => capy.photoUrl = encodeImage(capy.photoUrl));
  return all;
}

function resolveCapybara(id) 
{
  const found = getCapyByID(id);
  //found.photoUrl = encodeImage(found.photoUrl);
  return found;
}

module.exports = {
    RootQueryType
}