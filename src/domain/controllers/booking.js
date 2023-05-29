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
  getBookings: async (data) => {
    try {
      let booking = await bookings.aggregate([
        {
          '$lookup': {
            'from': 'users',
            'localField': 'client',
            'foreignField': '_id',
            'as': 'client'
          }
        }, {
          '$lookup': {
            'from': 'apartaments',
            'localField': 'apartament',
            'foreignField': '_id',
            'as': 'apartament'
          }
        }
      ]);
      console.log("BOKKING... ", booking);
      return booking;
    } catch (error) {
      console.log(error)
    }
  }
};
