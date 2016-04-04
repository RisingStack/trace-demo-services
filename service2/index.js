require('@risingstack/trace')

const express = require('express')
const app = express()

const PORT = process.env.VCAP_APP_PORT || process.env.PORT || 3001

app.get('/', function (req, res) {
  res.json({
    status: 'ok'
  })
})

app.listen(PORT, function (err) {
  if (err) {
    return console.log(err)
  }

  console.log(`server is listening on ${PORT}`)
})
