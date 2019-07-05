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
    signIn(email: String!, password: String!): Token
    newPost(title: String!, UserId: Int!): String
  }

  type Subscription {
    postsOfUser(id: ID!): [User!]!
  }

  type Token {
    token: String!
    user: User!
  }

`;

export default [linkSchema, userSchema, postSchema];
