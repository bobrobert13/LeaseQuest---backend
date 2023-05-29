import { ressortController } from "../controllers/ressort";
import { AuthVerify } from "../controllers/tools/jwt";
import colors from "colors";

export const ressortResolver = {
  Query: {
    getAllRessorts: async (_, { data }, context) => {
      try {
        //await AuthVerify(context.req.headers.authorization, ["admin", "user"]);
        //console.log("----DATAA ressort.. ", data);
        return await ressortController.getAllRessorts(data);
      } catch (e) {
        throw "ERROR-QUERY-ALL-RESSORTS";
      }
    },
  },

  Mutation: {
    newRessort: async (_, { data }, context) => {
      try {
        //await AuthVerify(context.req.headers.authorization, ["admin", "user"]);
        //console.log("----DATAA ressort.. ", data);
        return await ressortController.newRessort(data);
      } catch (e) {
        throw "ERROR-MUTATION-NEW-RESSORT";
      }
    },
    addApartamentToRessort: async (_, { _id, idApartament }, context) => {
      try {
        let response = await ressortController.addApartamentToRessort(_id, idApartament);
        return true;
      } catch (e) {
        console.log("ERROR.. ", e);
        throw "ERRROR-MUTATION-ADD-APAT-RESSORT"
      }
    }
  },
};
