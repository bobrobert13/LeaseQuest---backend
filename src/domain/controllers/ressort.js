import Ressort from "../model/ressort";

export const ressortController = {
  newRessort: async (data) => {
    try {
      await Ressort.insertMany(data);
      return data;
    } catch (e) {
      (e) => {
        throw e;
      };
    }
  },

  getAllRessorts: async (data) => {
    const { address, puntuacion } = data;
    console.log("filtro.", address, puntuacion);
    address.city == "" ? address.city = "El Tigre" : null
    try {
      const ressort = await Ressort.aggregate([
        {
          '$lookup': {
            'from': 'apartaments',
            'localField': 'apartaments._id',
            'foreignField': '_id',
            'as': 'apartaments'
          }
        },
        {
          '$match': {
            'apartaments.disponible': true,
            'status': true,
            $and: [{
              'address.city': address.city
            },
            {
              'puntuacion': { $eq: puntuacion },
            }]
          }
        }
      ]);
      return ressort;
    } catch (error) {
      throw error;
    }
  },

  addApartamentToRessort: async (_id, idApartament) => {
    console.log("inser.. ", _id, idApartament);
    await Ressort.updateOne({ _id: _id }, { $push: { apartaments: { _id: idApartament } } }).then((res) => {
      return res.acknowledged;
    }).catch((e) => {
      console.log("ERROR.. ", e);
      return e
    })
  }

};
