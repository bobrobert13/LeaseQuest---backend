import { createModule } from 'graphql-modules'
import { userResolver } from '../resolvers/user'
import { userType } from '../typeDefs/user.type'

export const user = createModule({
  id: 'user',
  dirname: __dirname,
  resolvers: [userResolver],
  typeDefs: [userType],
})
