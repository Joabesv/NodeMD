import fetch from 'node-fetch';

const checkStatus = async arrayUrls => {
  const statArray = await Promise.all(
    arrayUrls.map(async url => {
      const response = await fetch(url);
      return response.status;
    })
  );
  return statArray;
};

const generateUrlArray = linksArray => {
  return linksArray.map(link => Object.values(link).join());
};

export async function validateUrls(linksArray) {
  const links = generateUrlArray(linksArray);
  const statusLink = await checkStatus(links);
  return statusLink;
}
