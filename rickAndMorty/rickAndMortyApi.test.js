const { getCharacter } = require('./rickAndMortyApi');
const fetch = require('node-fetch')
jest.mock('node-fetch');

describe('rickAndMortyApi', () => {
  it('return only the characters name, status, and species', async () => {
    fetch.mockResolvedValue({
      json: () => Promise.resolve({
        'name': 'Rick Sanchez',
        'status': 'Alive',
        'species': 'Human'
      })
    })
    const res = await getCharacter(1);
    expect(res).toEqual({
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human'
    });
  });
});