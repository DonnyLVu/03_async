const fsPromises = require('fs').promises;
const { transformer } = require('./transformer.js');

describe('transformer', () => {
  beforeAll(() => {
    return Promise.all([
      fsPromises.writeFile('./transformer/transformTest.txt', 'Hello')
    ]);
  });
  it('should delete upcase, then lowercase all then uppercase all then reverse', () => {
    return transformer('./transformer/transformTest.txt')
      .then(() => {
        return fsPromises.readFile('./transformer/transformTest.txt', 'utf-8')
      })
      .then(res => {
        expect(res).toEqual('OLLE');
      })
  });
});