import autocannon from 'autocannon'
import fs from 'fs'

(async () => {
  const result = await autocannon({
    url: 'http://localhost:3000/',
    connections: 550,
    pipelining: 1,
    duration: 20
  })
  // console.log('bun', result)
  const now = new Date();
  const outFile = 'output/' + now.toISOString()
    .split('.')[0]
    .replace(/:/g, '_') + '.json'
  fs.writeFileSync(outFile, JSON.stringify(result, null, 2))
})();
