import { createModule } from "graphql-modules";
import { bookingResolver } from "../resolvers/booking";
import { bookingType } from "../typeDefs/booking.type";


export const bookingModule = createModule({
  id: 'bookingModule',
  resolvers: [bookingResolver],
  typeDefs: [bookingType],
})
