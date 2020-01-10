import _ from 'lodash';
import fs from 'fs';
import parsers from './parsers';

const path = require('path');

const compareFlatFiles = (firstPathToFile, secondPathToFile) => {
  const resultParse = [];

  const parse = parsers(firstPathToFile);

  const firstFile = fs.readFileSync(path.normalize(firstPathToFile));
  const firstFileAfterParse = parse(firstFile);

  const secondFile = fs.readFileSync(path.normalize(secondPathToFile));
  const secondFileAfterParse = parse(secondFile);

  Object.keys(firstFileAfterParse).map((key) => {
    const firstValue = firstFileAfterParse[key];
    const secondValue = secondFileAfterParse[key];

    if (!_.has(secondFileAfterParse, key)) {
      resultParse.push(`- ${key}: ${firstValue}`);
      return true;
    }
    if (firstValue !== secondValue) {
      resultParse.push(`- ${key}: ${firstValue}`);
      resultParse.push(`+ ${key}: ${secondValue}`);
      return true;
    }
    resultParse.push(`${key}: ${firstValue}`);
    return true;
  });

  Object.keys(secondFileAfterParse).map((key) => {
    if (!_.has(firstFileAfterParse, key)) {
      resultParse.push(`- ${key}: ${secondFileAfterParse[key]}`);
    }
    return true;
  });
  const resultToString = resultParse.join('\n');
  console.log(resultToString);
  return resultToString;
};

export default compareFlatFiles;
