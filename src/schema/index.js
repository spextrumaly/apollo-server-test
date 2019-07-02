import messageSchema from './messageSchema';
import userSchema from './userSchema';
import { gql } from 'apollo-server-express';

const linkSchema = gql`
  scalar Date
  scalar JSON

  type Query {
    user(id: ID!): User
    me: User
    test: String!
    users: [User!]!
    message(id: ID!): Message
    messages: [Message!]!
  }

  type Mutation {
    createMessage(text: String!): Message!
    deleteMessage(id: ID!): Boolean!
  }

`;

export default [linkSchema, userSchema, messageSchema];
