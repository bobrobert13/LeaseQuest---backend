import apartamentModel from "../model/apartaments";
import Ressort from "../model/ressort";
import { AuthVerify } from "../controllers/tools/jwt";

export const ApartamentController = {
  // get all controller
  getApartaments: async (data) => {
    try {
      if (data) {
        //filto por rango de apt y si es suite o no. Sino retorna todos.
        let rank;
        let suite;
        data.rank != "" ? (rank = 5) : "";
        data.suite != false ? (suite = data.suite) : (suite = false);
        const apt = await apartamentModel.find({
          points: { $gte: rank },
          suite: suite,
        });
        return apt;
      } else {
        const apt = await apartamentModel.find({});
        //console.log("APARTAMENTOS... ", apt);
        let recomendaded = [], general = [];
        apt.reduce((acc, apart) => {
          !!apart.recomendado ? recomendaded.push(apart) : general.push(apart)
        }, {});
        let apartamento = {
          general: general,
          recomendaded: recomendaded
        }
        console.log(apartamento)
        console.time()
        return apt;
      }
    } catch (error) {
      throw error;
    }
  },

  // get all by id
  async getApartamentsbyId(id) {
    try {
      const apt = await apartamentModel.findOne({ _id: id }).lean();
      return apt;
    } catch (error) {
      throw error;
    }
  },

  // get all recomendaded
  async getApartamentsRecommendaded() {
    try {
      const apt = await apartamentModel.find({ recomendado: { $eq: true } });
      return apt;
    } catch (error) {
      throw error;
    }
  },

  async getApartamentsbyRessorts(id) {
    try {
      const apt = await Ressort.findOne({ "apartaments._id": { $eq: id } });
      return apt;
    } catch (error) {
      throw error;
    }
  },

  // insert new apt
  newApartament: async (data) => {
    try {
      const apt = await apartamentModel.insertMany(data);
      return data;
    } catch (e) {
      (e) => {
        throw e;
      };
    }
  },

  // insert a new recomendaded by...

  newRecommendeds: async (data) => {
    try {
      await apartamentModel.updateOne(
        { _id: data.aptId },
        {
          $push: {
            recomendadoBy: [
              { fullname: data.name, email: data.email, id: data.userId },
            ],
          },
        }
      );
      return true;
    } catch (e) {
      //    console.log("ERROR-NEW-RECOMEMENDED", e);
      return e;
    }
  },

  newInFavOfUser: async (data) => {
    try {
      await apartamentModel.updateOne(
        { _id: data.aptId },
        {
          $push: {
            inFav: [
              { fullname: data.name, email: data.email, id: data.userId },
            ],
          },
        }
      );
      return true;
    } catch (error) {
      return error;
      //    console.log("ERROR-NEW-FAV", e);
    }
  },

  givePoints: async (data) => {
    try {
      await apartamentModel.updateOne(
        { _id: data.aptId },
        { $set: { points: data.points } }
      );
      return true;
    } catch (error) {
      return error;
    }
  },

  // get apt by points
  getByRanking: async () => {
    try {
      const apt = await apartamentModel.find({ points: { $gte: 5 } });
      return apt;
    } catch (e) {
      (e) => {
        throw e;
      };
    }
  },
};
