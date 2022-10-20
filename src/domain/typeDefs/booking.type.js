import { gql } from "graphql-modules";

export const bookingType = gql`

  type booking {
  _id: ID!
  number: Boolean
  apartaments: [apartament]
  client: [user]
  activa: Boolean
  cancelada: Boolean
  }

  type Query {

  }

  type Mutation {

  }
`
