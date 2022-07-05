import { readFile } from 'node:fs/promises';
import chalk from 'chalk';

const extractLink = text => {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const resultArray = [];
  let temp;

  while ((temp = regex.exec(text)) !== null) {
    resultArray.push({ [temp[1]]: temp[2] });
  }
  return resultArray;
};

const errTreatment = err => {
  throw new Error(chalk.red(err.code, err.message));
};

const getFile = async filepath => {
  const ENCODING = 'utf-8';
  try {
    const data = await readFile(filepath, ENCODING);
    console.log(extractLink(data));
  } catch (err) {
    console.log('something went wrong', errTreatment(err));
  }
};

console.log(await getFile('sample.md'));
