export class Card {
  cardNumber: number

  constructor(cardNumber: number) {
    this.cardNumber = cardNumber;
  }

  getRank(): number {
    const rank = this.cardNumber / 4;
    return Math.floor(rank);
  }
}
