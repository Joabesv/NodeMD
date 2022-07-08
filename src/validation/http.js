import chalk from 'chalk';
import fetch from 'node-fetch';

function handleErrors(err) {
  throw new Error(chalk.red(err.code, err.message));
}

const checkStatus = async arrayUrls => {
  try {
    const statArray = await Promise.all(
      arrayUrls.map(async url => {
        const response = await fetch(url);
        return `${response.status} - ${response.statusText}`;
      })
    );
    return statArray;
  } catch (err) {
    handleErrors(err);
  }
};

const generateUrlArray = linksArray => {
  return linksArray.map(link => Object.values(link).join());
};

export async function validateUrls(linksArray) {
  const links = generateUrlArray(linksArray);
  const statusLink = await checkStatus(links);

  const result = linksArray.map((obj, index) => ({
    ...obj,
    status: statusLink[index],
  }));

  return result;
}
