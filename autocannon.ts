import { BUN_PORT, EXPRESS_PORT, FASTIFY_PORT, SIFRR_PORT, UWS_PORT } from "./helper/constant"
import autocannon from 'autocannon'

async function run() {
  const result = await autocannon({
    url: 'http://localhost:' + BUN_PORT,
    connections: 10, //default
    pipelining: 1, // default
    duration: 10 // default
  })
  console.log('bun', result['statusCodeStats'])

}
async function runUWS() {
  const resultUWS = await autocannon({
    url: 'http://localhost:' + UWS_PORT,
    connections: 10, //default
    pipelining: 1, // default
    duration: 10 // default
  })
  console.log('uWS', resultUWS['statusCodeStats'])
}
async function runSIFRR() {
  const resultSIFRR = await autocannon({
    url: 'http://localhost:' + SIFRR_PORT,
    connections: 10, //default
    pipelining: 1, // default
    duration: 10 // default
  })
  console.log('sifrr', resultSIFRR['statusCodeStats'])
}
async function runFASTIFY() {
  const resultFASTIFY = await autocannon({
    url: 'http://localhost:' + FASTIFY_PORT,
    connections: 10, //default
    pipelining: 1, // default
    duration: 10 // default
  })
  console.log('fastify', resultFASTIFY['statusCodeStats'])
}
async function runEXPRESS() {
  const resultEXPRESS = await autocannon({
    url: 'http://localhost:' + EXPRESS_PORT,
    connections: 10, //default
    pipelining: 1, // default
    duration: 10 // default
  })
  console.log('express', resultEXPRESS['statusCodeStats'])
}

(async () => {
  await run();
  await runUWS();
  await runSIFRR();
  await runFASTIFY();
  await runEXPRESS();
})();
