import cors from 'cors';
import express from 'express';
import http from 'http';
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
  introspection: true,
  playground: true,
  graphiql: true,
  typeDefs: schema,
  resolvers,
  context,
});

// server.applyMiddleware({ app, path: '/graphql' });
// const httpServer = http.createServer(app);
// server.installSubscriptionHandlers(httpServer);

// app.listen({ port: 8000 }, () => {
//   /*eslint-disable */
//   console.log('Apollo Server on http://localhost:8000/graphql');

//   /* eslint-enable */

// });
const port = '8000';

const runServer = async () => {
  server.applyMiddleware({ app, path: '/graphql' });
  const httpServer = http.createServer(app);
  server.installSubscriptionHandlers(httpServer);
  const host = '0.0.0.0';
  httpServer.listen({ port, host }, () => console.log(`Apollo Server on http://0.0.0.0:${port}/graphql`));
};

try {
  runServer();
} catch (err) {
  console.error('Start server error::', err);
}