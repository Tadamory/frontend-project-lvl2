export default class JsonFile {
  constructor(path) {
    this.path = path;
  }

  parse() {
    return JSON.parse;
  }
}
