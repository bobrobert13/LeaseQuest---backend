import { ApartamentController } from "../controllers/apartaments";


export const apartamentResolver = {
  Query: {
    //Listar todos los apts.
    allApartaments: async (_, { data }) => {
      const apartament = await ApartamentController.getApartaments(data);
      return apartament;
    },

    // get a un apt por id.
    getOneApartament: async (_, { id }) => {
      const apartament = await ApartamentController.getApartamentsbyId(id);
      return apartament;
    },

    // get a recomendado solo.
    getRecommendadedApartaments: async (_, { }) => {
      const apartament = await ApartamentController.getApartamentsRecommendaded();
      return apartament;
    },

    getByRank: async (_, { }) => {
      const apartament = await ApartamentController.getByRanking();
      return apartament;
    },

  },
  Mutation: {
    // nuevo apt
    newApartament: async (_, { data }) => {
      const apartament = await ApartamentController.newApartament(data);
      return apartament;
    },

    filterApartaments: async (_, { data }) => {
      console.log("rank", data)
      const apartament = await ApartamentController.getApartaments(data);
      return apartament;
    },
  }
}
