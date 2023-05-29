const dotenv = require("dotenv")
dotenv.config()

const env = process.env.NODE_ENV;

module.exports = {
  env: env,
  port: process.env.PORT || 4000,
  db: {
    mongodb: {
      development: "mongodb://127.0.0.1:27017/apertum",
      production: "mongodb://127.0.0.1:27017/"
    },
    sql: {
      development: "",
      production: ""
    }
  },
  JWTsecret: process.env.JWTSECRET
}
