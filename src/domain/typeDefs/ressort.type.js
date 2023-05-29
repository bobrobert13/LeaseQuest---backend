import { gql } from "graphql-modules";

export const ressortType = gql`

  type address {
    city: String
    state: String
    postal: String
    country: String
    street: String
    edNumber: Int
  }

  input addressInput {
    city: String
    state: String
    postal: String
    country: String
    street: String
    edNumber: Int
  }


  type ressort {
    _id: ID
    nombre: String
    rif: String
    tlt: String
    status: Boolean
    description: String
    puntuacion: Int
    apartaments: [apartaments]
    address: address
  }

  type apatRessort {
    _id: ID!
  }

  input apatRessortInput {
    _id: ID!
  }

  input filterInput {
    address: addressInput
    puntuacion: Int
  }


  input ressortInput {
    nombre: String
    rif: String
    tlt: String
    status: Boolean
    description: String
    puntuacion: Int
    apartaments: [apatRessortInput]
    address: addressInput
  }

  type Query {
    getAllRessorts(data: filterInput): [ressort]
  }

  type Mutation {
    newRessort(data: ressortInput): ressort
    addApartamentToRessort(_id: ID!, idApartament: ID!): Boolean
  }
`;
