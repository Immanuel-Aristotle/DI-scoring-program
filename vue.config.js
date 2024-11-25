const { defineConfig } = require("@vue/cli-service");
// vue.config.js
module.exports = {
  publicPath: '' // This removes the base path, so assets will be referenced without any prefix
};
