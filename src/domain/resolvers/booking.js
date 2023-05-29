import { bookingController } from "../controllers/booking";
import { AuthVerify } from "../controllers/tools/jwt";

export const bookingResolver = {
  Query: {
    getBookings: async (_, { data }, context) => {
      return bookingController.getBookings(data);
    },
  },
  Mutation: {
    newRent: async (_, { data }, context) => {
      return bookingController.newRent(data);
    },
  }
};
