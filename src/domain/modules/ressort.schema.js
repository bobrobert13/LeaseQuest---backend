import { createModule } from "graphql-modules";
import { ressortResolver } from "../resolvers/ressort";
import { ressortType } from "../typeDefs/ressort.type";

export const ressortModule = createModule({
  id: "ressortModule",
  resolvers: [ressortResolver],
  typeDefs: [ressortType],
});
