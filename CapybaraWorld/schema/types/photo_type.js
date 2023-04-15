const { 
    GraphQLObjectType, 
    GraphQLString,
} = require('graphql');

const PhotoType = new GraphQLObjectType({
    name: 'Photo',
    fields: {
      data: { type: GraphQLString },
      contentType: { type: GraphQLString }
    }
});

module.exports = {
    PhotoType
}