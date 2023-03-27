import { gql } from "graphql-modules";

export const ressortType = gql`
  type ressort {
    _id: ID
    nombre: String
    rif: String
    tlt: String
    status: Boolean
    description: String
    puntuacion: Int
    apartaments: [apartaments]
  }

  input ressortInput {
    nombre: String
    rif: String
    tlt: String
    status: Boolean
    description: String
    puntuacion: Int
    apartaments: [apartamentInput]
  }

  type Query {
    getAllRessorts: [ressort]
  }

  type Mutation {
    newRessort(data: ressortInput): ressort
  }
`;
