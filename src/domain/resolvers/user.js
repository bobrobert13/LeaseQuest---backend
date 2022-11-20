import { userController } from "../controllers/user"

export const userResolver = {
  Query: {
    getOneUser: async (_, id) => {
      return userController.getUserById(id)
    },
    allUsers: async () => {
      let users = await userController.getAllUser();
      return users
    }
  },

  Mutation: {
    newUser: async (_, data) => {
      const newUser = await userController.newUser(data);
      return newUser
    },
    updateUser: async (_, { data }) => {
      const userUpdate = await userController.updateUserData(data);
      return userUpdate;
    }
  }

}
