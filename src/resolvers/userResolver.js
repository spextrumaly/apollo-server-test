import GraphQLJSON from 'graphql-type-json';
import { messages } from './mockupData';

export default {
  JSON: GraphQLJSON,

  User: {
    message: (parent, args, context) => {
      return messages[parent.id];
    },
  },
};

