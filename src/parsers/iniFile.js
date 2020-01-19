const ini = require('ini');

export default class IniFile {
  constructor(path) {
    this.path = path;
  }

  parse() {
    return ini.parse;
  }
}
