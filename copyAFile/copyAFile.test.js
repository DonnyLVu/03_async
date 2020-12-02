const fsPromises = require('fs').promises;
const { copyAFile } = require('./copyAFile');

describe('copyAFile test', () => {
  afterEach(() => {
    return fsPromises.rm('./copyTest-copy.txt');
  });
  it('return a copy by reading a file and writes a copy', async () => {
    return copyAFile('./copyAFile/copyTest.txt', './copyTest-copy.txt')
      .then(() => {
        return fsPromises.readFile('./copyAFile/copyTest.txt', 'utf-8');
      })
      .then(
        copyTest => {
          expect(copyTest).toEqual('Hello World')
        }
      )
  })
});