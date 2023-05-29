import { userController } from "../controllers/user";
import { AuthVerify } from "../controllers/tools/jwt";
import colors from "colors";

export const userResolver = {
  Query: {
    login: async (_, { data }, context) => {
      data.auth = context.req.headers.authorization;
      try {
        //console.log("CONTEXTO DESDE FRONT...", data);
        const token = await userController.login(data);
        // console.log(colors.bgRed("-------- login ------", token));
        return {
          token: {
            code: token.code,
            user: token,
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

    getFavoriteApartaments: async (_, { _id }, context) => {
      console.log("ID... ", _id);
      return await userController.getFavoriteApartaments(_id);
    },

    allUsers: async (_, { }, context) => {
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
    addApartamentToFavorites: async (_, { userId, aptId }, context) => {
      return await userController.addApartamentToFavorite(userId, aptId);
    },
  },
};
