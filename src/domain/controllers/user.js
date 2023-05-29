import User from "../model/user";
import { jwtCreate } from "./tools/jwt";
import mongoose from 'mongoose'

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

  addApartamentToFavorite: async (userId, aptId) => {
    let addDone = false;
    await User.updateOne({ "_id": userId }, { $push: { "favorites": { _id: aptId } } }).then((res) => {
      addDone = res.acknowledged
    }).catch((e) => {
      console.log("ERROR.. ", e);
    })
    return addDone;
  },

  getFavoriteApartaments: async (_id) => {
    try {
      console.log("CONSULTADNO... ", _id);
      let favoritesApartaments = await User.aggregate([
        {
          '$match': {
            '_id': mongoose.Types.ObjectId(_id)
          }
        }, {
          '$lookup': {
            'from': 'apartaments',
            'localField': 'favorites._id',
            'foreignField': '_id',
            'as': 'favorites'
          }
        }, {
          '$project': {
            'favorites': 1,
            '_id': 0
          }
        }
      ]);
      return favoritesApartaments[0].favorites;

    } catch (error) {
      console.error(error);
      throw 'ERROR-GETTING-FAVORITE-USER-APARTAMENTS', error;
    }


  }

};
