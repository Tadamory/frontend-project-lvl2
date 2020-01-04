import * as _ from 'lodash';

const fs = require('fs');
const path = require('path');

const compareFlatFiles = (firstPathToFile, secondPathToFile) => {
  const resultParse = [];
  const firstFile = fs.readFileSync(path.resolve(firstPathToFile));
  const firstFileAfterParse = JSON.parse(firstFile);

  const secondFile = fs.readFileSync(path.resolve(secondPathToFile));
  const secondFileAfterParse = JSON.parse(secondFile);

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
