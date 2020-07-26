const version = process.env.VERSION || require('../package.json').version

module.exports = {
  version,
  banner:
    '/*!\n' +
    ' * Efuzy Framework v' + version + '\n' +
    ' * (c) 2015-present Razvan Stoenescu\n' +
    ' * Released under the MIT License.\n' +
    ' */\n'
}
