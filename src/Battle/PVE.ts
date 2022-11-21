import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';
import getRandomInt from '../utils';

export default class PVE extends Battle {
  private _player: Fighter;
  private _monsters: (Fighter | SimpleFighter)[];

  constructor(player: Fighter, enemies: (Fighter | SimpleFighter)[]) {
    super(player);
    this._player = player;
    this._monsters = enemies;
  }

  verifyStruggle() {
    if (this._player.lifePoints === -1 || this._monsters.length === 0) {
      return false;
    }
    return true;
  }

  override fight(): number {
    let struggle = true;

    do {
      this._player.attack(
        this._monsters[getRandomInt(0, this._monsters.length - 1)],
      );

      this._monsters.forEach((enemy, i) => {
        if (enemy.lifePoints === -1) {
          this._monsters.splice(i, 1);
        } else {
          enemy.attack(this._player);
        }
      });
      struggle = this.verifyStruggle();
    } while (struggle);
    return super.fight();
  }
}