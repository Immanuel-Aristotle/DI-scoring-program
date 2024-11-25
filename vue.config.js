const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'https://immanuel-aristotle.github.io/DI-scoring-program.github.io/' : '/'
};
