import User from "../model/user";
import { jwtCreate } from "./tools/jwt";
export const userController = {
  login: async (data) => {
    let token;
    try {
      await User.findOne({ email: data.email })
        .lean()
        .then(async (user) => {
          if (!user) throw "USER-NOT-FOUND";
          token = await jwtCreate(user);
        })
        .catch((e) => {
          throw ("ERROR-QUERY-FROM-LOGIN", e);
        });
    } catch (error) {
      throw error;
    }
    return token;
  },

  getAllUser: async () => {
    try {
      return await User.find({});
    } catch (error) {
      throw error;
    }
  },

  getUserById: async ({ userId }) => {
    try {
      const oneUser = await User.findOne({ _id: userId }).lean();
      return oneUser;
    } catch (error) {
      throw error;
    }
  },

  newUser: async ({ data }) => {
    await User.insertMany(data);
    return data;
  },

  updateUserData: async (data) => {
    await User.updateOne(
      { email: data.email },
      { $set: { fullName: data.fullName } }
    );
    return data;
  },
};
