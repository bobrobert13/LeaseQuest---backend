import { createModule } from 'graphql-modules'
import { userResolver } from '../resolvers/user'
import { userType } from '../typeDefs/user.type'

export const user = createModule({
  id: 'user',
  resolvers: [userResolver],
  typeDefs: [userType],
})
