// async/await
const fsPromises = require('fs').promises;

async function readFile() {
  try {
    const data = await fsPromises.readFile('./README.md', 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readFile();

async function writeFile() {
  try {
    await fsPromises.writeFile('./sandbox/README.md', 'This is to test to see if write file does it correctly')
    console.log('done with writeFile');
  } catch (err) {
    console.log(err);
  }
}

writeFile();

async function copyFile() {
  try {
    const data = await fsPromises.readFile('./sandbox/README.md', 'utf-8');
    await fsPromises.writeFile('./sandbox/README-copy.md', data)
    console.log('done with copyFile');
  } catch (err) {
    console.log(err);
  }
}

copyFile();