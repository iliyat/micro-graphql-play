const { GraphQLObjectType, GraphQLNonNull, GraphQLString  } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'AttachedMedia',
  description: 'All types of files attached to game object',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString)},
    gameId: { type: new GraphQLNonNull(GraphQLString)},
    uri: { type: new GraphQLNonNull(GraphQLString)},
  }
});
