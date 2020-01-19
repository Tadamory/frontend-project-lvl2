#!/usr/bin/env node
import compareFiles from '../index';

const program = require('commander');

const genDiff = (firstPathToFile, secondPathToFile) => {
  compareFiles(firstPathToFile, secondPathToFile);
};

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstPathToFile> <secondPathToFile>')
  .action((firstPathToFile, secondPathToFile) => {
    genDiff(firstPathToFile, secondPathToFile);
  });

program.parse(process.argv);

export default genDiff;
