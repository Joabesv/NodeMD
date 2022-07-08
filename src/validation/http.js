const generateUrlArray = linksArray => {
  return linksArray.map(link => Object.values(link).join());
};
export function validateUrls(linksArray) {
  return generateUrlArray(linksArray);
}
