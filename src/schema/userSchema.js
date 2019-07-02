import { gql } from 'apollo-server-express';

export default gql`
  type User {
    username: String!
    id: ID!
    message: Message!
  }
`;
