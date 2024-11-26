import { Elysia, t } from "elysia"
import { Example } from "./controllers/example.controller"
import { swaggerConfig } from "./configs/swagger.configs"
import { tlsConfig } from "./configs/tls.config"
import { cors } from '@elysiajs/cors'
import { MongoDB } from "./configs/database.config"
import { jwtConfig } from "./configs/jwt.config"
import { AccountController } from "./controllers/account.controller"
import { UserController } from "./controllers/user.controller"
MongoDB.connect()
const app = new Elysia()
  .use(cors())
  .use(AccountController)
  .use(jwtConfig)
  .use(swaggerConfig)
  // .use(Example)
  .use(UserController)
  //   .listen({
  //     port: Bun.env.PORT || 8000,
  //     tls: tlsConfig
  //   })

  // console.log(
  //   `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  // )
  .listen({
    port: Bun.env.PORT || 8000,
    tls: tlsConfig
  })

let protocol = 'http'
if ('cert' in tlsConfig)
  protocol = 'https'
console.log(`🦊 Elysia is running at ${protocol}://${app.server?.hostname}:${app.server?.port}`)


