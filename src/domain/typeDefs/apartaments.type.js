import { gql } from "graphql-modules";

export const apartamentType = gql`

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

  
  type services {
    _id: ID!
    name: String
    status: Boolean
  }

  type user {
    _id: ID!
  fullName: String
  email: String
  foto: String
  phone: Int
  }

  type booking {
    _id: ID!
    start: String
    end: String
  }

  type plans {
    byDay: Boolean
    byMonth: Boolean
    byWeek: Boolean
  }

  type apartaments {
  _id: ID!
  name: String
  photo: String
  description: String
  disponible: Boolean
  recomendado: Boolean
  bathrooms: Int
  rooms: Int
  salas: Int
  suite: Boolean
  costo: Int
  plans: [plans]
  points: Int
  recomendadoBy: [user]
  gallery: [gallery]
  numberApt: Int
  calidad: calidad
  inFav: user
  cocinas: Int
  muebleria: Boolean
  servicios: [services]
  status: Boolean
  booking: booking
  }

  input apartamentInput {
  name: String
  photo: String
  description: String
  disponible: Boolean
  recomendado: Boolean
  bathrooms: Int
  address: addressInput
  rooms: Int
  salas: Int
  suite: Boolean
  costo: Int
  plans: [plansInput]
  points: Int
  recomendadoBy: [userInput]
  gallery: [galleryInput]
  numberApt: Int
  calidad: calidad
  inFav: userInput
  cocinas: Int
  muebleria: Boolean
  servicios: [servicesInput]
  status: Boolean
  booking: bookingInput
  }

  input plansInput {
    byDay: Boolean
    byMonth: Boolean
    byWeek: Boolean
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

  input addressInput {
    referencia: String
    entityID: ID
    type: typeAddress
  }


  input userInput {
  fullName: String
  email: String
  foto: String
  phone: Int
  }


  type Query {
    allApartaments: [apartaments]
    getOneApartament(id: ID!): apartaments
    getRecommendadedApartaments: [apartaments]
  }

  type Mutation {
    newApartament(data: apartamentInput ): apartaments
  }

`
