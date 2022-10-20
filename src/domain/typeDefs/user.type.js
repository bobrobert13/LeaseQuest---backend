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

  type getUsers {
    allUser: [User]
    }

  input userInput {
  fullName: String
  email: String
  foto: String
  password: String
  phone: Int
  }

  type Query {
  getOneUser(userId: ID): User
  allUsers: [getUsers]
    }

  type Mutation {
  newUser(data: userInput): User
  updateUser(data: userInput): User
    }

`


