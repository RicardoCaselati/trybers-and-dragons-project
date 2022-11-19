import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  override fight(): number {
    let endGame = 1;
    let index = 0;
    const gamersArray = [this._player1, this._player2];

    do {
      const nextGamer = index ? 0 : 1;
      gamersArray[index].attack(gamersArray[nextGamer]);
      endGame = gamersArray[nextGamer].lifePoints;
      index = nextGamer;
    } while (endGame > 0);

    return super.fight();
  }
}

export default PVP;
