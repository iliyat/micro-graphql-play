const { GraphQLObjectType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');
const AttachedMedia = require('./AttachedMedia');
const AttachedMediaResolver = require('../resolvers/AttachedMediaResolver');

module.exports = new GraphQLObjectType({
  name: 'Game',
  description: 'Game type',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    files: {
      type: new GraphQLList(AttachedMedia),
      description: 'List of all game files',
      resolve: AttachedMediaResolver.list,
    }
  })
});