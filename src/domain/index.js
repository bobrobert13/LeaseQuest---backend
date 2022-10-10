const { ApolloServer } = require("apollo-server-express")
const typeDefs = require("../domain/schemas")
const resolvers = require("../domain/resolvers")
const config = require("../config")
const http = require("http")

module.exports = {
apollosServiceInit: (app) => {
    const apolloApp = new ApolloServer({
        typeDefs,
        resolvers,
        methods: 'POST',
        playground: process.env.NODE_ENV || 'development',
        introspection: true,
        playground: true,
        subscribe: true,
        debug: true,
        subscriptions: {},


    })
    let urlApi = "/graphql";
    apolloApp.applyMiddleware({ 
        app, 
        urlApi,
        cors: false, bodyParserConfig: 
        {
        limit:"10mb"
        }
        });
    
    const server = http.createServer(app)
    server.listen(config.port, () => {"Server Apollo GraphQl preparado.!!"} )
},  
}