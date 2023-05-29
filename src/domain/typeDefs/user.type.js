import { gql } from "graphql-modules";

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

  type favorites {
    _id: ID
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
    favorites: [favorites]
    notifications: [notifications]
    seguridad: seguridad
    role: role
    address: address
    code: String
  }

  type loginResponse {
    token: token
  }

  input loginInput {
    email: String
    password: String
  }

  type token {
    code: String
    expire: Int
    user: User
  }

input favoritesInput {
  _id: ID
}

  input userInput {
    fullName: String
    email: String
    foto: String
    password: String
    role: role
    favorites: [favoritesInput]
  }

  type Query {
    getOneUser(userId: ID): User
    allUsers: [User]
    login(data: loginInput): loginResponse
    getFavoriteApartaments(_id: ID!): [apartaments]
  }

  type Mutation {
    newUser(data: userInput): User
    updateUser(data: userInput): User
    addApartamentToFavorites(userId: ID!, aptId: ID!): Boolean
  }
`;
