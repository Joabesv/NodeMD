import { getFile } from '../src/index.js';

const arrayResult = [
  {
    Vite: 'https://vitejs.dev/',
  },
];

describe('getFile::', () => {
  it('should be a function', () => {
    expect(typeof getFile).toBe('function');
  });

  it('should return array with results', async () => {
    const result = await getFile('./tests/samples/sample.md');
    expect(result).toEqual(arrayResult);
  });
  it('should return there are no links', async () => {
    const result = await getFile('./tests/samples/sample_no_links.md');
    expect(result).toBe('0 links were found');
  });
});
