import cors from 'cors';
import express from 'express';
import models from './models';
import resolvers from './resolvers';
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';

const context = async ({req, connection}) => {
  const authorization = req.headers['authorization'];
  // const jwtPayload = await jwt.verify(token, process.env.SECRET);
  return {
    models, authorization
  };
};

const app = express();
app.use(cors());
const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  /*eslint-disable */
  console.log('Apollo Server on http://localhost:8000/graphql');

  /* eslint-enable */

});
