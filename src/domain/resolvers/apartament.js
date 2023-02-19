import { ApartamentController } from "../controllers/apartaments";
import { AuthVerify } from "../controllers/tools/jwt";

export const apartamentResolver = {
  Query: {
    //Listar todos los apts.
    allApartaments: async (_, { data }, context) => {
      //await AuthVerify(context.req.headers.authorization, ["admin", "user"]);
      const apartament = await ApartamentController.getApartaments(data);
      return apartament;
    },

    // get a un apt por id.
    getOneApartament: async (_, { id }, context) => {
      const apartament = await ApartamentController.getApartamentsbyId(id);
      return apartament;
    },

    // get a recomendado solo.
    getRecommendadedApartaments: async (_, {}, context) => {
      const apartament =
        await ApartamentController.getApartamentsRecommendaded();
      return apartament;
    },

    getByRank: async (_, {}, context) => {
      const apartament = await ApartamentController.getByRanking();
      return apartament;
    },
  },
  Mutation: {
    // nuevo apt
    newApartament: async (_, { data }, context) => {
      const apartament = await ApartamentController.newApartament(data);
      return apartament;
    },

    filterApartaments: async (_, { data }, context) => {
      console.log("rank", data);
      const apartament = await ApartamentController.getApartaments(data);
      return apartament;
    },
  },
};
