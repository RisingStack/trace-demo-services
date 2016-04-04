var config = require('./config')

var services = config.services
var service = 'service' + process.env.SERVICE

if (services.indexOf(service) === -1) {
  throw new Error('No such service: ' + process.env.SERVICE)
}

require(`./${service}`)
