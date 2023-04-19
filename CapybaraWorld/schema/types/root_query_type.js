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
  const copy = all.map(obj => Object.assign({}, obj));
  copy.forEach(capy => {
    capy.photo = encodeImage(capy.photo);
  });

  return copy;
}

function resolveCapybara(id) 
{
  const found = getCapyByID(id);
  found.photo = encodeImage(found.photo);
  return found;
}

module.exports = {
    RootQueryType
}