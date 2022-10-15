
export const userResolver = {
  Query: {
    getOneUser: async () => {
      let user = []
      return user
    },
    allUsers: async () => {
      let users = []
      return users
    }
  },

  Mutation: {
    newUser: async (_, data) => {
      let user = [];
      user.push({})
      return user
    },
    updateUser: async (_, data) => {
      return 'update'
    }
  }

}
