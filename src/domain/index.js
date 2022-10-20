import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import config from '../config'
import http from 'http'
import { Application } from './modules'

const schema = Application.createSchemaForApollo()
let urlApi = "/graphql";

export const server = {
  apollosServiceInit: async (app) => {

    const apolloApp = new ApolloServer({
      schema,
      method: 'POST',
      plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground({})
      ],
      introspection: true,
      playground: true,
      subscribe: true,
      debug: true,
      subscriptions: {},
    })

    await apolloApp.start()

    apolloApp.applyMiddleware({
      app,
      path: urlApi,
      cors: true
    })

    const server = http.createServer(app)
    server.listen(config.port, () => { console.log(` =======> Server Apollo GraphQl preparado.!!, puerto: ${config.port}${apolloApp.graphqlPath} `); })
  },
}
