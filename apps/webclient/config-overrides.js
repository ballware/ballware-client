const fs = require ('fs');
const path = require('path');
const { override, babelInclude, removeModuleScopePlugin } = require("customize-cra");
const {aliasDangerous, configPaths} = require('react-app-rewire-alias/lib/aliasDangerous');

module.exports = function (config, env) {
  return Object.assign(config, override(
    aliasDangerous({...configPaths('tsconfig.paths.json')}),
    babelInclude([
      fs.realpathSync('src'),
      fs.realpathSync('../../packages')
    ])
  )(config, env))
}