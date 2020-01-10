import compareFlatFiles from '../src/compareFlatFiles';

//  const path = require('path');

const targetStr = 'host: hexlet.io\n'
  + '- timeout: 50\n'
  + '+ timeout: 20\n'
  + '- proxy: 123.234.53.22\n'
  + '- follow: false\n'
  + '- verbose: true';

//  далее нужно будет добавить тест на path.dirname для работы с абсолютными путями

test('compareFlatFiles: relative path', () => {
  const firstPathToFile = '__test__/__fixtures__/before.json';
  const secondPathToFile = '__test__/__fixtures__/after.json';
  expect(compareFlatFiles(firstPathToFile, secondPathToFile)).toEqual(targetStr);
});
