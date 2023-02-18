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
