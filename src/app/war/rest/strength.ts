import {Card} from "./card";
import {PlayersStrategyDTO} from "./statisctics";

export class StrengthDTO {
  player1Cards: Card[];
  player2Cards: Card[];
  playersStrategyDTO: PlayersStrategyDTO;


  constructor(player1Cards: Card[], player2Cards: Card[], playersStategyDTO: PlayersStrategyDTO) {
    this.player1Cards = player1Cards;
    this.player2Cards = player2Cards;
    this.playersStrategyDTO = playersStategyDTO;
  }
}
