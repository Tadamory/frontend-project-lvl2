const yaml = require('js-yaml');

export default class YamlFile {
  constructor(path) {
    this.path = path;
  }

  parse() {
    return yaml.safeLoad;
  }
}
