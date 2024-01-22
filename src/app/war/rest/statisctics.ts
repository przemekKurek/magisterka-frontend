export interface Statistics {
  firstPlayerWonGames: number;
  secondPlayerWonGames: number;
  draws: number;
  firstPlayerStrategy: string;
  secondPlayerStrategy: string;
  averageAmountOfRounds: number;
  detectedCycles: string[];
}

export class PlayersStrategyDTO {
  fisrtPlayerStrategySequence: string;
  secondPlayerStrategySequence: string;
  constructor(fisrtPlayerStrategySequence: string, secondPlayerStrategySequence: string) {
    this.fisrtPlayerStrategySequence = fisrtPlayerStrategySequence;
    this.secondPlayerStrategySequence = secondPlayerStrategySequence;
  }
}
