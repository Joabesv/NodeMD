import chalk from 'chalk';
import { getFile } from './index.js';

const file = process.argv;
const processText = async filepath => {
  const result = await getFile(filepath[2]);
  console.log(chalk.yellow('Links list:'), result);
};

console.log(await processText(file));
