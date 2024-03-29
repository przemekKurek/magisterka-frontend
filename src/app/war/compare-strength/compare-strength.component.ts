import {Component, OnChanges, SimpleChanges} from '@angular/core';
import {Card} from "../rest/card";
import {PlayersStrategyDTO} from "../rest/statisctics";
import {RestWarService} from "../rest/rest-war.service";
import {StrengthDTO} from "../rest/strength";

@Component({
  selector: 'app-compare-strength',
  templateUrl: './compare-strength.component.html',
  styleUrls: ['./compare-strength.component.css']
})
export class CompareStrengthComponent implements OnChanges {

  player1Aces: number = 0;
  player1Kings: number = 0;
  player1Queens: number = 0;
  player1Jacks: number = 0;
  player1Tens: number = 0;
  player1Nines: number = 0;
  player1Eights: number = 0;
  player1Sevens: number = 0;
  player1Sixes: number = 0;
  player1Fives: number = 0;
  player1Fours: number = 0;
  player1Threes: number = 0;
  player1Twos: number = 0;

  player2Aces: number = 0;
  player2Kings: number = 0;
  player2Queens: number = 0;
  player2Jacks: number = 0;
  player2Tens: number = 0;
  player2Nines: number = 0;
  player2Eights: number = 0;
  player2Sevens: number = 0;
  player2Sixes: number = 0;
  player2Fives: number = 0;
  player2Fours: number = 0;
  player2Threes: number = 0;
  player2Twos: number = 0;

  firstPlayerStrategy = 'R';
  firstPlayerWarStrategy = 'R';
  secondPlayerStrategy = 'R';
  secondPlayerWarStrategy = 'R';

  firstPlayerDeckStrength = 0;
  secondPlayerDeckStrength = 0;

  player1Cards: Card[] = [];
  player2Cards: Card[] = [];
  statistics: any;
  loading: boolean = false;

  cardValues: number[] = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  isHovered: boolean = false;

  constructor(private restWarService: RestWarService) {
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.assignCards();
  }

  assignCards() {
    this.player1Cards = [];
    this.player2Cards = [];

    const player1Quantities: number[] = [this.player1Aces, this.player1Kings, this.player1Queens, this.player1Jacks, this.player1Tens,
      this.player1Nines, this.player1Eights, this.player1Sevens, this.player1Sixes, this.player1Fives, this.player1Fours,
      this.player1Threes, this.player1Twos]
    const player2Quantities: number[] = [this.player2Aces, this.player2Kings, this.player2Queens, this.player2Jacks,
      this.player2Tens, this.player2Nines, this.player2Eights, this.player2Sevens, this.player2Sixes, this.player2Fives,
      this.player2Fours, this.player2Threes, this.player2Twos]

    this.cardValues.forEach((value, index) => {
      this.addCards(player1Quantities[index], this.player1Cards, value);
      this.addCards(player2Quantities[index], this.player2Cards, value);
    });
  }

  calculateCardsStrength() {
    const playersStrategyDTO = new PlayersStrategyDTO(this.firstPlayerStrategy.toUpperCase(), this.firstPlayerWarStrategy.toUpperCase(),
      this.secondPlayerStrategy.toUpperCase(), this.secondPlayerWarStrategy.toUpperCase());
    this.assignCards();

    const strength = new StrengthDTO(this.player1Cards, this.player2Cards, playersStrategyDTO);

    this.restWarService.compareStrength(strength).subscribe(
      stats => {
        this.statistics = stats;
      },
      () => {
        // Handle error if needed
      },
      () => {
        this.loading = false; // Hide the spinner when the request is complete
        this.player1Cards = [];
        this.player2Cards = [];
      }
    );
  }

  addCards(cardsAmount: number, cards: Card[], typeOfCard: number) {
    for (let i = 0; i < cardsAmount; i++) {
      const card = new Card(typeOfCard * 4)
      cards.push(card);
    }
  }

  isValid() {
    return this.equalNumberOfCards() && this.isWholeDeckInGame();
  }

  equalNumberOfCards() {
    return this.player1Cards.length === this.player2Cards.length;
  }

  isWholeDeckInGame() {
    for (let i = 0; i < this.cardValues.length; i++) {
      const cardAmount = this.player1Cards.filter(card => card.cardNumber == i * 4).length +
        this.player2Cards.filter(card => card.cardNumber == i * 4).length;
      if (cardAmount !== 4) {
        return false;
      }
    }
    return true;
  }

  showStats() {
    return !this.loading && this.statistics;
  }

  equalDecks() {
    this.player1Aces = 2;
    this.player1Kings = 2;
    this.player1Queens = 2;
    this.player1Jacks = 2;
    this.player1Tens = 2;
    this.player1Nines = 2;
    this.player1Eights = 2;
    this.player1Sevens = 2;
    this.player1Sixes = 2;
    this.player1Fives = 2;
    this.player1Fours = 2;
    this.player1Threes = 2;
    this.player1Twos = 2;
    this.player2Aces = 2;
    this.player2Kings = 2;
    this.player2Queens = 2;
    this.player2Jacks = 2;
    this.player2Tens = 2;
    this.player2Nines = 2;
    this.player2Eights = 2;
    this.player2Sevens = 2;
    this.player2Sixes = 2;
    this.player2Fives = 2;
    this.player2Fours = 2;
    this.player2Threes = 2;
    this.player2Twos = 2;
    this.assignCards();
  }

  calculateCardStrengthInPlayer1Deck() {
    this.assignCards();
    let player1DeckStrength = 0;
    for (const cardDTO of this.player1Cards) {
      const c = cardDTO.getRank();
      player1DeckStrength += this.getCardStrength(c);
    }
    if (this.player1Cards.length === 0) {
      this.firstPlayerDeckStrength = 0;
    } else {
      this.firstPlayerDeckStrength = player1DeckStrength;
    }
  }

  calculateCardStrengthInPlayer2Deck() {
    this.assignCards();
    let player2DeckStrength = 0;
    for (const cardDTO of this.player2Cards) {
      const c = cardDTO.getRank();
      player2DeckStrength += this.getCardStrength(c);
    }
    if (this.player2Cards.length === 0) {
      this.secondPlayerDeckStrength = 0;
    } else {
      this.secondPlayerDeckStrength = Math.round(player2DeckStrength);
    }
  }


  private getCardStrength(cardRank: number): number {
    switch (cardRank) {
      case 0:
        return 0;
      case 1:
        return 45;
      case 2:
        return 317;
      case 3:
        return 397;
      case 4:
        return 476;
      case 5:
        return 635;
      case 6:
        return 1150;
      case 7:
        return 1720;
      case 8:
        return 2290;
      case 9:
        return 6050;
      case 10:
        return 10630;
      case 11:
        return 20750;
      case 12:
        return 100000;
      default:
        return 0;
    }
  }

  fullStrength(): number {
    let fullStrength = 0;
    for (let i = 0; i <= 12; i++) {
      fullStrength = fullStrength + this.getCardStrength(i) * 4;
    }
    return fullStrength;
  }

  get player1Strength(): number {
    const strength = this.firstPlayerDeckStrength / this.fullStrength() * 100;
    return parseFloat(strength.toFixed(2));
  }

  get player2Strength(): number {
    const strength = this.secondPlayerDeckStrength / this.fullStrength() * 100;
    return parseFloat(strength.toFixed(2));  }
}
