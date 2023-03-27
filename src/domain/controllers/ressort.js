import Ressort from "../model/ressort";

export const ressortController = {
  newRessort: async (data) => {
    try {
      const ressort = await Ressort.insertMany(data);
      return data;
    } catch (e) {
      (e) => {
        throw e;
      };
    }
  },

  getAllRessorts: async () => {
    try {
      const ressort = await Ressort.find({});
      return ressort;
    } catch (error) {
      throw error;
    }
  },
};
