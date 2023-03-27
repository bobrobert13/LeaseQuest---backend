import { bookingController } from "../controllers/booking";
import { AuthVerify } from "../controllers/tools/jwt";

export const Query = {};

export const Mutation = {
  newRent: async (_, { data }, context) => {
    return bookingController.newRent(data);
  },
};
