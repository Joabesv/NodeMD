import { readFile } from 'node:fs/promises';
import chalk from 'chalk';

const errTreatment = err => {
  throw new Error(chalk.red(err.code, err.message));
};

const getFile = async filepath => {
  const ENCODING = 'utf-8';
  try {
    const data = await readFile(filepath, ENCODING);
    return data;
  } catch (err) {
    console.log('something went wrong', errTreatment(err));
  }
};

console.log(chalk.blue('Blue this', await getFile('sample.md')));
