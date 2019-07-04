import GraphQLJSON from 'graphql-type-json';
import jwt from 'jsonwebtoken';
import postResolver from './postResolver';
import userResolver from './userResolver';

const customScalarResolver = {
  JSON: GraphQLJSON,

  Query: {
    me: async (parent, args, { models, authorization }) => {
      // console.log('me authorization::', authorization.split(' '));
      const token = authorization.split(' ')[1];
      // console.log('me token::', token);
      const jwtPayload = await jwt.verify(token, process.env.SECRET);
      // console.log('me jwtPayload::', jwtPayload);
      // const user = await models.User.findOne(jwtPayload);
      // eslint-disable-next-line no-console
      return jwtPayload.user;
    },
  },

};

export default [customScalarResolver, userResolver, postResolver];
