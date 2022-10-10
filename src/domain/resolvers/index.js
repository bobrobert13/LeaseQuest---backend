  const fs = require("fs")
  const path = require("path")

module.exports = ( () => {
    //let resolvers = {Query: {}, Mutation: {}, Subscriptions: {}}
    let resolvers = {Query: {}, Mutation: {}}
    fs.readdirSync(__dirname).filter((file) => {
        return (file.indexOf(".") !== 0 && (file !== "index.js") && (file.slice(-3) === '.js'))
    } ).forEach((file) =>{
        //Cargo todos los schemas
        let resolrs = path.join(__dirname, file)
        console.log("RESOLVERS: ", resolrs)
        Object.assign(resolvers.Query, rsver.Query);
        Object.assign(resolvers.Mutation, rsver.Mutation);
        Object.assign(resolvers.Subscription, rsver.Subscription);
    })
    return resolvers
})()