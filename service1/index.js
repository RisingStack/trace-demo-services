require('@risingstack/trace')

const express = require('express')
const rp = require('request-promise')
const app = express()

const SERVICE_2_URL = process.env.SERVICE_2_URL
const PORT = process.env.VCAP_APP_PORT || process.env.PORT || 3000

app.get('/', function (req, res) {
  rp(SERVICE_2)
    .then(() => {
      res.json({
        status: 'ok'
      })
    })
    .catch((err) => {
      res.status(500).send({
        error: err
      })
    })
})

app.listen(PORT, function (err) {
  if (err) {
    return console.log(err)
  }

  console.log(`server is listening on ${PORT}`)
})
