import compareFlatFiles from '../src/compareFlatFiles';

const targetStr = 'host: hexlet.io\n'
  + '- timeout: 50\n'
  + '+ timeout: 20\n'
  + '- proxy: 123.234.53.22\n'
  + '- follow: false\n'
  + '- verbose: true';

test('compareFlatFiles: path', () => {
  const firstPathToFile = './__test__/__fixtures__/before.json';
  const secondPathToFile = './__test__/__fixtures__/after.json';
  expect(compareFlatFiles(firstPathToFile, secondPathToFile)).toEqual(targetStr);
});

test('compareFlatFiles: absolute path', () => {
  const firstPathToFile = '/home/tadamory/projects/frontend-project-lvl2/__test__/__fixtures__/before.json';
  const secondPathToFile = '/home/tadamory/projects/frontend-project-lvl2/__test__/__fixtures__/after.json';
  expect(compareFlatFiles(firstPathToFile, secondPathToFile)).toEqual(targetStr);
});

test('compareFlatFiles: relative path', () => {
  const firstPathToFile = '__test__/__fixtures__/before.json';
  const secondPathToFile = '__test__/__fixtures__/after.json';
  expect(compareFlatFiles(firstPathToFile, secondPathToFile)).toEqual(targetStr);
});
