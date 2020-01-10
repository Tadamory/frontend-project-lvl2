const path = require('path');
const yaml = require('js-yaml');
const ini = require('ini');

//  тут нужно будет сделать через диспетчеризацию

export default (pathToFile) => {
  switch (path.extname(pathToFile)) {
    case '.json':
      return JSON.parse;
    case '.yml':
      return yaml.safeLoad;
    case '.ini':
      return ini.parse;
    default:
      return null;
  }
};
