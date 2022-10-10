const dotenv = require("dotenv")
dotenv.config()

const env = process.env.NODE_ENV || 'development';

module.exports = {
    env: env,
    port: process.env.PORT || 3000,
    db: {
        mongodb: {
        development: "mongodb://127.0.0.1:27017/",
        production: "mongodb://127.0.0.1:27017/"
    },
        sql: {
            development: "",
            production: ""
        }
},
}