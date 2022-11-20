import { createApplication } from "graphql-modules";
import { apartamentModule } from "./apartaments.schema";
import { user } from "./user.schema";


export const Application = createApplication({
  modules: [user, apartamentModule]
})
