import { bookings } from "../model/booking";

export const bookingController = {
  newRent: async (data) => {
    try {
      await bookings.insertMany(data);
      return true;
    } catch (error) {
      return error;
    }
  },
};
