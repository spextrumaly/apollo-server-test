import cors from 'cors';
import express from 'express';
import models from './models';
import resolvers from './resolvers';
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';
import { users } from './resolvers/mockupData';

const app = express();
app.use(cors());
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    me: users[1],
    models
  },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  /*eslint-disable */
  console.log('Apollo Server on http://localhost:8000/graphql');

  /* eslint-enable */

});
