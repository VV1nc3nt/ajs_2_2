import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game';

const game = new Game();
game.start();

console.log({
  'Игра': Game,
  'Сохраняемые данные': GameSavingData,
  'Лоад': loadGame,
  'Сейв': saveGame
});