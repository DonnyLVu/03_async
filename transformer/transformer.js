const fsPromises = require('fs').promises;

// async function transformAFile(src) {
//   try {
//     const transformData = fsPromises.readFile(src, 'utf8');
//     return transformData
//       // replaces CAPITALS with empty str
//       .then(transformedData => transformedData.replace(/[^a-z]/g, ''))
//       // MAKES THEM ALL UPPERCASE
//       .then(transformedData => transformedData.toUpperCase())
//     console.log(transformData)
//   } catch (err) {
//     console.log(err)
//   }
// };

function reverseString(str) {
  return str.split("").reverse().join("").toUpperCase()
}

function removeCaps(str) {
  return str.replace(/[^a-z]/g, '');
}

async function transformer(src) {
  return fsPromises.readFile(src, 'utf-8')
    .then(res => {
      return removeCaps(res);
    })
    .then(res => {
      return reverseString(res)
    })
    .then(res => {
      return fsPromises.writeFile(src, res, "utf-8")
    })
}

module.exports = {
  transformer,
  reverseString,
  removeCaps
};