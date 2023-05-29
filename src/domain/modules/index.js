import { createApplication } from "graphql-modules";
import { apartamentModule } from "./apartaments.schema";
import { ressortModule } from "../modules/ressort.schema";
import { bookingModule } from "./bookings.schema";
import { user } from "./user.schema";

export const Application = createApplication({
  modules: [user, apartamentModule, ressortModule, bookingModule],
});
