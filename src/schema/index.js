const { GraphQLObjectType, GraphQLList ,GraphQLSchema } = require('graphql');
const { Game }  = require('./types');
const { GameResolver } = require('./resolvers');

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'Root query',
  fields: () => ({
    games: {
      type: new GraphQLList(Game),
      description: "List of all games",
      resolve: GameResolver.all,
    },
  })
});


module.exports = new GraphQLSchema({
  query: RootQuery,
});
