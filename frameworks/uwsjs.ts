import { UWS_PORT, message } from "../helper/constant";

/* Non-SSL is simply App() */
require('uWebSockets.js').App({

  /* There are more SSL options, cut for brevity */
  // key_file_name: 'misc/key.pem',
  // cert_file_name: 'misc/cert.pem',
}).get('/*', (res, req) => {
  /* It does Http as well */
  res.writeStatus('200 OK')
    // .writeHeader('IsExample', 'Yes')
    .end(message);

}).listen(UWS_PORT, (listenSocket) => {

  if (listenSocket) {
    console.log('Listening to port ', UWS_PORT);
  }

});