import JsonFile from './jsonFile';
import YamlFile from './yamlFile';
import IniFile from './iniFile';

const path = require('path');

//  тут нужно будет сделать через диспетчеризацию

export default (pathToFile) => {
  switch (path.extname(pathToFile)) {
    case '.json':
      return new JsonFile();
    case '.yml':
      return new YamlFile();
    case '.ini':
      return new IniFile();
    default:
      return null;
  }
};
