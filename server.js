const express = require('express')

const app = express()
const port = process.env.PORT || 3000


app.get('/api/whoami', function(req, res) {
  const os = getOs(req.headers)
  const ip = req.ip
  const lang = getLang(req.headers)
  res.json({
    'ipaddress': ip,
    'language': lang,
    'os': os,
  })
}).listen(port, function(){
  console.log('app started at port ' + port)
})

function getOs(headers) {
  let os = /\((.*?)\)/.exec(headers['user-agent'])[1]
  return os
}

function getLang(headers) {
  let lang = headers['accept-language'].split(',')[0]
  return lang
}
