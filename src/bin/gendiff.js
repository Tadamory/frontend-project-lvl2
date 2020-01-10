#!/usr/bin/env node
import compareFlatFiles from '../compareFlatFiles';
import commander from 'commander';

const genDiff = (firstPathToFile, secondPathToFile) => {
  compareFlatFiles(firstPathToFile, secondPathToFile);
};

commander
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstPathToFile> <secondPathToFile>')
  .action((firstPathToFile, secondPathToFile) => {
    genDiff(firstPathToFile, secondPathToFile);
  });

commander.parse(process.argv);

export default genDiff;
