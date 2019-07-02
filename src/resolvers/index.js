import GraphQLJSON from 'graphql-type-json';
import messageResolver from './messageResolver';
import userResolver from './userResolver';
import { messages, users } from './mockupData';

const customScalarResolver = {
  JSON: GraphQLJSON,

  Query: {
    user: async (parent, { id }, context) => users[id],
    me: async (parent, args, { me, models }) => {
      const user = await models.User.findOne({
        where: { email: 'test@test.com' }
      });
      console.log(user);
      return me;
    },
    users: async (parent, args, context) => Object.values(users),
    messages: async (parent, args, context) => Object.values(messages),
    message: async (parent, { id }, context) => messages[id],
  },
  Mutation: {
    createMessage: (parent, { text }, context) => {
      const lastIndex = messages.length;
      const message = {
        id: lastIndex + 1,
        text: text,
      };
      messages.push(message);
      return message;
    },
    deleteMessage: (parent, { id }, context) => {
      if (messages.length <= id) {
        return false;
      } else {
        messages.splice(id - 1, 1);
        return true;
      }
      
    }
  },
};

export default [customScalarResolver, messageResolver, userResolver];

