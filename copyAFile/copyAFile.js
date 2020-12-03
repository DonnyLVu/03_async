const fsPromises = require('fs').promises;

async function copyAFile(src, dst) {
  try {
    const fileData = await fsPromises.readFile(src, 'utf-8');
    console.log(src);
    await fsPromises.writeFile(dst, fileData);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  copyAFile
};