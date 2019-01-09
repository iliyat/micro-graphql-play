const { send200 } = require('./httpHelpers');
const graphqlHTTP = require('express-graphql');
const Schema = require('./schema');

/*const handler = (req, res) => {
  console.log(req);
  send200(res, {
    name: 'test',
    data: [],
  })
};*/

const handler = graphqlHTTP({
  schema: Schema,
  graphiql: true,
});

module.exports = handler;