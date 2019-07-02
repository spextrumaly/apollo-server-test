import { gql } from 'apollo-server-express';

export default gql`
  type Message {
    id: ID!
    text: String!
    user(id: ID!): User!
  }
`;
