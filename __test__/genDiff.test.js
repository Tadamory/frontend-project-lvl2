import compareFlatFiles from '../src/compareFlatFiles';

const targetStr = 'host: hexlet.io\n'
  + '- timeout: 50\n'
  + '+ timeout: 20\n'
  + '- proxy: 123.234.53.22\n'
  + '- follow: false\n'
  + '- verbose: true';

const firstPathToFile = './__test__/__fixtures__/before.json';
const secondPathToFile = './__test__/__fixtures__/after.json';

test('compareFlatFiles', () => {
  expect(compareFlatFiles(firstPathToFile, secondPathToFile)).toEqual(targetStr);
});
