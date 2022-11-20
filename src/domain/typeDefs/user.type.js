import { gql } from 'graphql-modules'


export const userType = gql`

  enum role {
   admin
   user
  }

  enum typeAddress {
    casa
    apartamento
    ninguno
  }

  type social_net {
    facebook: String
    instagram: String
  }

  type notifications {
    active: Boolean
    username: String
    phone: String
  }

  type seguridad {
    pin: Int
    status: Boolean
  }

  type address {
    referencia: String
    entityID: ID
    type: typeAddress
  }

  type User {
  _id: ID!
  fullName: String
  email: String
  foto: String
  password: String
  active: Boolean
  phone: Int
  social: social_net
  notifications: [notifications]
  seguridad: seguridad
  role: role
  address: address
}


  input userInput {
  fullName: String
  email: String
  foto: String
  password: String
  role: role
  }

  type Query {
  getOneUser(userId: ID): User
  allUsers: [User]
    }

  type Mutation {
  newUser(data: userInput): User
  updateUser(data: userInput): User
    }

`


