import { SIFRR_PORT, message } from "../helper/constant";

const { App } = require('@sifrr/server');

const app = new App();
app.get('/', (res, req) => res.send(message));

app.listen(SIFRR_PORT);
console.log('listening', SIFRR_PORT)