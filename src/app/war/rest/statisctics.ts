export interface Statistics {
  firstPlayerWonGames: number;
  secondPlayerWonGames: number;
  draws: number;
  playersStrategyDTO: PlayersStrategyDTO;
  averageAmountOfRounds: number;
  averageAmountOfWars: number;
  detectedCycles: string[];
}

export class PlayersStrategyDTO {
  fisrtPlayerStrategySequence: string;
  fisrtPlayerWarStrategySequence: string;
  secondPlayerStrategySequence: string;
  secondPlayerWarStrategySequence: string;

  constructor(fisrtPlayerStrategySequence: string, fisrtPlayerWarStrategySequence: string, secondPlayerStrategySequence: string, secondPlayerWarStrategySequence: string) {
    this.fisrtPlayerStrategySequence = fisrtPlayerStrategySequence;
    this.fisrtPlayerWarStrategySequence = fisrtPlayerWarStrategySequence;
    this.secondPlayerStrategySequence = secondPlayerStrategySequence;
    this.secondPlayerWarStrategySequence =secondPlayerWarStrategySequence;
  }
}
