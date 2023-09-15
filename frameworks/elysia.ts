import { Elysia } from 'elysia'
import { ELYSIA_PORT, message } from '../helper/constant'

new Elysia()
  .get('/', () => message)
  .listen(ELYSIA_PORT)
console.log(`Listening on http://localhost:${ELYSIA_PORT}...`);
