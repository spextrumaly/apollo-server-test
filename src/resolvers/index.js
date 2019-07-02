import GraphQLJSON from 'graphql-type-json';
import postResolver from './postResolver';
import userResolver from './userResolver';

const customScalarResolver = {
  JSON: GraphQLJSON,

  Query: {
    me: async (parent, args, { models }) => {
      const user = await models.User.findOne({
        where: { email: 'test@test.com' }
      });
      // eslint-disable-next-line no-console
      console.log(user);
      return user;
    },
  },

};

export default [customScalarResolver, userResolver, postResolver];
