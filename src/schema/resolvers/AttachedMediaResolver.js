const mock = [
  {
    id: 'test-file-1',
    gameId: 'test-game-1',
    uri: 'http://localhost:3000',
  },
];

module.exports = {
  all: () => {
    return mock;
  },
  list: game => {
    return mock.filter(m => m.gameId === game.id) || [];
  }
};