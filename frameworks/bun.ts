import { BUN_PORT, message } from "../helper/constant";

console.log('hello bun')
const server = Bun.serve({
  port: BUN_PORT,
  fetch(req) {
    return new Response(message);
  },
});

console.log(`Listening on http://localhost:${server.port}...`);
