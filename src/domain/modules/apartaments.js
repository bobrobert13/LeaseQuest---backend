import { createModule } from "graphql-modules";
import { apartamentsType } from "../typeDefs/apartaments.type";

export const apartament = createModule({
  id: 'apartament',
  dirname: __dirname,
  typeDefs: apartamentsType,
})
