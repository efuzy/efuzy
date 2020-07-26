const path = require('path')
const moduleAlias = require('module-alias')

moduleAlias.addAlias('efuzy', path.join(__dirname, '..'))

require('@efuzy/app/bin/efuzy-build')
