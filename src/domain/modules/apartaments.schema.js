import { createModule } from "graphql-modules";
import { apartamentResolver } from "../resolvers/apartament";
import { apartamentType } from "../typeDefs/apartaments.type";


export const apartamentModule = createModule({
  id: 'apartamentModule',
  resolvers: [apartamentResolver],
  typeDefs: [apartamentType],
})
