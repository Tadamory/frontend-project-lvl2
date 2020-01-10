import compareFlatFiles from '../src/compareFlatFiles';

const fs = require('fs');

const resultJson = fs.readFileSync('__test__/__fixtures__/json/result.txt', 'utf8');
const resultYaml = fs.readFileSync('__test__/__fixtures__/yaml/result.txt', 'utf8');
const resultIni = fs.readFileSync('__test__/__fixtures__/ini/result.txt', 'utf8');

//  далее нужно будет добавить тест на path.dirname для работы с абсолютными путями

test('compare flat files: json', () => {
  const firstPathToFile = '__test__/__fixtures__/json/before.json';
  const secondPathToFile = '__test__/__fixtures__/json/after.json';
  expect(compareFlatFiles(firstPathToFile, secondPathToFile)).toEqual(resultJson);
});

test('compare flat files: yaml', () => {
  const firstPathToFile = '__test__/__fixtures__/yaml/before.yml';
  const secondPathToFile = '__test__/__fixtures__/yaml/after.yml';
  expect(compareFlatFiles(firstPathToFile, secondPathToFile)).toEqual(resultYaml);
});

test('compare flat files: ini', () => {
  const firstPathToFile = '__test__/__fixtures__/ini/before.ini';
  const secondPathToFile = '__test__/__fixtures__/ini/after.ini';
  expect(compareFlatFiles(firstPathToFile, secondPathToFile)).toEqual(resultIni);
});
