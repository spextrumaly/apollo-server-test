import GraphQLJSON from 'graphql-type-json';
import { users } from './mockupData';

export default {
  JSON: GraphQLJSON,

  Message: {
    user: (parent, { id }, context) => {
      return users[id];
    },
  },
};
