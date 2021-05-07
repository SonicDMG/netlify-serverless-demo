'use strict'

const server = require('./functions/server')

server.listen(3000, () => console.log('Local app listening on port 3000!'))

const server_basic = require('./functions/server_basic')

server_basic.listen(3001, () => console.log('Local app listening on port 3001!'))
