import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PlayersStrategyDTO, Statistics} from "../rest/statisctics";
import {RestWarService} from "../rest/rest-war.service";
import { Chart } from 'chart.js';


@Component({
  selector: 'app-compare-table',
  templateUrl: './compare-table.component.html',
  styleUrls: ['./compare-table.component.css']
})
export class CompareTableComponent {

  constructor(private restWarService: RestWarService) {
    this.statistics = [];
  }

  strategy = 'R';
  warStrategy = 'R';
  statistics: Statistics[] = [];
  loading: boolean = false;

  getStatistics() {
    this.loading = true; // Show the spinner
    const playersStrategyDTO = new PlayersStrategyDTO(this.strategy.toUpperCase(), this.warStrategy.toUpperCase(), '', '');
    this.restWarService.compareStrategyWithBasicStrategies(playersStrategyDTO).subscribe(
      stats => {
        this.statistics = stats;
      },
      () => {
        // Handle error if needed
      },
      () => {
        this.loading = false; // Hide the spinner when the request is complete
      }
    );
  }

  isValid() {
    return !!this.strategy && this.strategy.length > 0;
  }

  showTable() {
    return !this.loading && this.statistics && this.statistics.length > 0;
  }

  getFirstPlayerStrategy(playersStrategyDTO: PlayersStrategyDTO): string {
    if (playersStrategyDTO != null) {
      return playersStrategyDTO.fisrtPlayerStrategySequence;
    }
    return ''
  }

  getFirstPlayerWarStrategy(playersStrategyDTO: PlayersStrategyDTO): string {
    if (playersStrategyDTO != null) {
      return playersStrategyDTO.fisrtPlayerWarStrategySequence;
    }
    return ''
  }

  getSecondPlayerStrategy(playersStrategyDTO: PlayersStrategyDTO): string {
    if (playersStrategyDTO != null) {
      return playersStrategyDTO.secondPlayerStrategySequence;
    }
    return ''
  }

  getSecondPlayerWarStrategy(playersStrategyDTO: PlayersStrategyDTO): string {
    if (playersStrategyDTO != null) {
      return playersStrategyDTO.secondPlayerWarStrategySequence;
    }
    return ''
  }
}
