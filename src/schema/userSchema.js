import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    user(id: ID!): User
    users: [User!]!
    numberOfUsers: Int!
    usersDESC: [User!]!
    userAgeGreaterThan(age: Int!): [User!]!
  }

  type User {
    name: String!
    id: ID!
    email: String!
    password: String!
    age: Int!
    posts: [Post!]!
  }
`;
