import { readFile } from 'node:fs/promises';
import chalk from 'chalk';

const getFile = async filepath => {
  const ENCODING = 'utf-8';
  try {
    return await readFile(filepath, ENCODING);
  } catch (err) {
    console.log('something went wrong', chalk.red(err.message));
  }
};

console.log(chalk.blue('Blue this', await getFile('sample.md')));
