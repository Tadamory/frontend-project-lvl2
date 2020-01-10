const path = ('path');
const yaml = ('js-yaml');

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
