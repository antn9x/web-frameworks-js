import { BUN_PORT, EXPRESS_PORT, FASTIFY_PORT, SIFRR_PORT, UWS_PORT } from "./helper/constant"
import autocannon from 'autocannon'

function createOptions(port: number): autocannon.Options {
  return {
    url: `http://localhost:${port}/`,
    connections: 10, //default
    pipelining: 1, // default
    duration: 10, // default
  }
}

async function runBun() {
  const result = await autocannon(createOptions(BUN_PORT))
  console.log('bun', result['statusCodeStats'])
}
async function runUWS() {
  const resultUWS = await autocannon(createOptions(UWS_PORT))
  console.log('uWS', resultUWS['statusCodeStats'])
}
async function runSIFRR() {
  const resultSIFRR = await autocannon(createOptions(SIFRR_PORT))
  console.log('sifrr', resultSIFRR['statusCodeStats'])
}
async function runFASTIFY() {
  const resultFASTIFY = await autocannon(createOptions(FASTIFY_PORT))
  console.log('fastify', resultFASTIFY['statusCodeStats'])
}
async function runEXPRESS() {
  const resultEXPRESS = await autocannon(createOptions(EXPRESS_PORT))
  console.log('express', resultEXPRESS['statusCodeStats'])
}

(async () => {
  await runBun();
  await runUWS();
  await runSIFRR();
  await runFASTIFY();
  await runEXPRESS();
})();
