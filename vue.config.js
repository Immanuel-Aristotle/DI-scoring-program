const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'https://github.com/Immanuel-Aristotle/DI-scoring-program.github.io' : '/'
};
