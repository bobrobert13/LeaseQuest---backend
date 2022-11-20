import User from '../model/user'
export const userController = {

  getAllUser: async () => {
    try {
      return await User.find({});
    } catch (error) {
      throw error
    }
  },

  getUserById: async ({ userId }) => {
    try {
      const oneUser = await User.findOne({ _id: userId }).lean()
      return oneUser;
    } catch (error) {
      throw error
    }
  },

  newUser: async ({ data }) => {
    await User.insertMany(data)
    return data
  },

  updateUserData: async (data) => {
    await User.updateOne({ email: data.email }, { $set: { fullName: data.fullName } });
    return data;
  }
}

