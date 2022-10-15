import { createApplication } from "graphql-modules";
import { user } from "./user.schema";

export const Application = createApplication({
  modules: [user,]
})
