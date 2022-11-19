import Energy from '../Energy';

interface Fighter {
  defense: number;
  energy?: Energy;
  special?(enemy: Fighter):void;
  levelUp():void;
}

export default Fighter;
