import { gql } from "graphql-modules";

export const bookingType = gql`

scalar Upload
scalar Date

type status{ 
  code: Int
  process: String
}

  type booking {
  _id: ID!
  number: Boolean
  apartament: [apartaments]
  client: [User]
  status: status
  }

  input statusInput{ 
  code: Int
  process: String
}


  input bookingInput {
  apartament: ID!
  client: ID!
  status: statusInput
  }

  type filter {
    createdAt: Date
    updatedAt: Date
    active: Boolean
  }

  input filterInput {
    createdAt: Date
    updatedAt: Date
    active: Boolean
  }

  type Query {
    getBookings(data: filterInput): [booking]
  }

  type Mutation {
    newRent(data:bookingInput): Boolean
  }
`;
