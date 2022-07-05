import chalk from 'chalk';
import { readFile } from 'node:fs/promises';

const getFile = async filepath => {
  const ENCODING = 'utf-8';

  try {
    const data = await readFile(filepath, ENCODING);
    return data;
  } catch (err) {
    console.log('something went wrong', err.message);
  }
};

console.log(chalk.blue('Blue this'));
console.log('file data', '\n', chalk.green(await getFile('sample.md')));
