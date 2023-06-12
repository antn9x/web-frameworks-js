import { EXPRESS_PORT, message } from "../helper/constant"

const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(message)
})

app.listen(EXPRESS_PORT, () => {
  console.log(`Example app listening on port ${EXPRESS_PORT}`)
})
