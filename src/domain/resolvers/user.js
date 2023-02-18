import { userController } from "../controllers/user";
import { AuthVerify } from "../controllers/tools/jwt";

export const userResolver = {
  Query: {
    login: async (_, { data }, context) => {
      try {
        const token = await userController.login(data);
        return {
          token: {
            code: token,
          },
        };
      } catch (e) {
        throw ("RESOLVER-LOGIN-ERROR", e);
      }
    },
    getOneUser: async (_, id, context) => {
      await AuthVerify(context.req.headers.authorization, ["admin", "user"]);
      return userController.getUserById(id);
    },
    allUsers: async (_, {}, context) => {
      await AuthVerify(context.req.headers.authorization, ["admin"]);
      let users = await userController.getAllUser();
      return users;
    },
  },

  Mutation: {
    newUser: async (_, data, context) => {
      const newUser = await userController.newUser(data);
      return newUser;
    },
    updateUser: async (_, { data }, context) => {
      await AuthVerify(context.req.headers.authorization, ["admin", "user"]);
      const userUpdate = await userController.updateUserData(data);
      return userUpdate;
    },
  },
};
