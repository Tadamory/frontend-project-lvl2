const path = require('path');
const yaml = require('js-yaml');

//  тут нужно будет сделать через диспетчеризацию

export default (pathToFile) => {
  switch (path.extname(pathToFile)) {
    case '.json':
      return JSON.parse;
    case '.yml':
      return yaml.safeLoad;
    default:
      return null;
  }
};
