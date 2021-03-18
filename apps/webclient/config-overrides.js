const fs = require ('fs');
const { override, babelInclude } = require("customize-cra");
module.exports = function (config, env) {
  return Object.assign(config, override(
    babelInclude([
      fs.realpathSync('src'),
      fs.realpathSync('../../packages')
    ])
  )(config, env))
}