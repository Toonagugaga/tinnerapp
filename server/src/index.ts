import { Elysia, t } from "elysia"
import { Example } from "./controllers/example.controller"
import { swaggerConfig } from "./configs/swagger.configs"
import { tlsConfig } from "./configs/tls.config"
import { cors } from '@elysiajs/cors'

const app = new Elysia()
  .use(cors())
  .use(swaggerConfig)
  .use(Example)
  .listen({
    port: Bun.env.PORT || 8000,
    tls: tlsConfig
  })

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)


