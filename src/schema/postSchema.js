import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    post(id: ID!): Post
    posts: [Post!]!
    postsOfUser(name: String!): [User!]!
  }
  type Post {
    title: String!
    id: ID!
    UserId: Int!
    user: User!
  }
`;
