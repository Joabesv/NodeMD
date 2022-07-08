import chalk from 'chalk';
import { getFile } from './index.js';
import { validateUrls } from './validation/http.js';

const path = process.argv;
const processText = async filepath => {
  const result = await getFile(filepath[2]);

  if (path[3] === '--validate') {
    console.log(chalk.yellow('Links Validados:'), validateUrls(result));
  } else {
    console.log(chalk.yellow('Links list:'), result);
  }
};

processText(path);
