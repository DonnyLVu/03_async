const fetch = require('node-fetch');

const URL = 'https://rickandmortyapi.com/api/character/'

const getCharacter = (id) => {
  return fetch(`${URL}/ ${id}`)
    .then(res => res.json())
    .then(({ name, status, species }) => {
      return {
        name,
        status,
        species
      };
    });
};

module.exports = {
  getCharacter
};