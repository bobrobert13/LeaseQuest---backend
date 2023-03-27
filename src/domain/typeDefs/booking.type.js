import { gql } from "graphql-modules";

export const bookingType = gql`

type status{ 
  code: Int
  process: String
}

  type booking {
  _id: ID!
  number: Boolean
  apartament: ID
  client: ID
  status: status
  }

  input statusInput{ 
  code: Int
  process: String
}

  input bookingInput {
  apartament: ID!
  client: ID!
  status: status
  }

  type Query {

  }

  type Mutation {
    newRent(data:bookingInput): Boolean
  }
`;
