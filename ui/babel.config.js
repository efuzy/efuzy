module.exports = {
  env: {
    development: {
      presets: [
        '@efuzy/babel-preset-app'
      ]
    },

    production: {
      presets: [ 'es2015-rollup' ],
      comments: false
    }
  }
}
