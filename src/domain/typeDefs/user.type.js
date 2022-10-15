import { gql } from 'graphql-modules'

export const userType = gql`
    type User {
        _id: ID
        fullName: String
        email: String
        password: String
        active: Boolean
        pin: Int
        phone: Int
        role: String
    }

    type getUsers {
        allUser: [User]
    }

    input userInput {
        fullName: String
        email: String
        password: String
        active: Boolean
        pin: Int
        phone: Int
        role: String
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


