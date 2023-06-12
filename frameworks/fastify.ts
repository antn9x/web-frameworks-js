import { FASTIFY_PORT, message } from "../helper/constant";

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: false })

// Declare a route
fastify.get('/', async (request, reply) => {
  reply.raw.write(message)
  reply.raw.end()
})
// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: FASTIFY_PORT })
    console.log('fastify listen ', FASTIFY_PORT)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
