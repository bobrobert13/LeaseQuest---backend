import { gql } from "graphql-modules";

export const apartamentsType = gql`

  enum calidad {
    Exelente
    Buena
    Regular
  }

  enum typeAddress {
    casa
    apartamento
    ninguno
  }

  type address {
    referencia: String
    entityID: ID
    type: typeAddress
  }

  type gallery {
  _id: ID!
  path: String
  photo: String
  url: String
  binary: String
  }

  type apartaments {
  name: String
  photo: String
  description: String
  disponible: Boolean
  recomendado: Boolean
  bathrooms: Number
  address: address
  rooms: Number
  salas: Number
  suite: Boolean
  costo: Number
  plans: [plans]
  points: Number
  recomendadoBy: [user]
  gallery: [gallery]
  numberApt: Number
  calidad: calidad
  inFav: user
  cocinas: Number
  muebleria: Boolean
  servicios: [services]
  disponible: Boolean
  status: Boolean
  booking: booking,
  }

  input userInput {
  fullName: String
  email: String
  foto: String
  phone: Int
  }

  input galleryInput {
  path: String
  photo: String
  url: String
  binary: String
  }

  input servicesInput {
    name: String
    status: Boolean
  }

  input bookingInput {
    start: String
    end: String
  }

  type Query {

  }

  type Mutation {

  }

`
