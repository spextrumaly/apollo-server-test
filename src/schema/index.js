import postSchema from './postSchema';
import userSchema from './userSchema';
import { gql } from 'apollo-server-express';

const linkSchema = gql`
  scalar Date
  scalar JSON

  type Query {
    me: User
    test: String!
  }

  type Mutation {
    signUp(name: String!, email: String!, password: String!, age: Int!): String!
    newPost(title: String!, UserId: Int!): String!
  }

`;

export default [linkSchema, userSchema, postSchema];
