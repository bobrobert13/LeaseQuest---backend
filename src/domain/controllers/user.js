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
          user.token = data.auth;
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
      throw 'ERROR-ALLUSERS-REQUEST', error;
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
    const userExist = await User.findOne({ email: data.email }).lean();
    if (userExist) throw "Usuario ya existe";
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
