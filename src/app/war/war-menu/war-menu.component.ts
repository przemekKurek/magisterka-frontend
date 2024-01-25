import {Component, OnInit} from '@angular/core';
import {RestWarService} from "../rest/rest-war.service";
import {PlayersStrategyDTO} from "../rest/statisctics";

@Component({
  selector: 'app-war-menu',
  templateUrl: './war-menu.component.html',
  styleUrls: ['./war-menu.component.css']
})
export class WarMenuComponent implements OnInit {

  stats: any;
  firstPlayerStrategy: string = 'R';
  firstPlayerWarStrategy: string = 'R';
  secondPlayerWarStrategy: string = 'R';
  secondPlayerStrategy: string = 'R';
  loading: boolean = false;

  constructor(private restWarService: RestWarService) {
  }

  ngOnInit(): void {
  }

  isValid() {
    return !!this.firstPlayerStrategy && !!this.secondPlayerStrategy;
  }

  getStatisticsBothPlayersWithStrategy() {
    this.loading = true; // Show the spinner
    const playersStrategyDTO = new PlayersStrategyDTO(this.firstPlayerStrategy.toUpperCase(), this.firstPlayerWarStrategy.toUpperCase(),
      this.secondPlayerStrategy.toUpperCase(), this.secondPlayerWarStrategy.toUpperCase());

    this.restWarService.gameWithStrategyForStatistics(playersStrategyDTO).subscribe(
      stats => {
        this.stats = stats;
      },
      () => {
        // Handle error if needed
      },
      () => {
        this.loading = false; // Hide the spinner when the request is complete
      }
    );
  }


  showStats() {
    // Add your logic to determine whether to show the stats or not
    return !this.loading && this.stats;
  }


  getStatisticsAndDetectCycles() {
    this.loading = true; // Show the spinner
    const playersStrategyDTO = new PlayersStrategyDTO(this.firstPlayerStrategy.toUpperCase(), this.firstPlayerWarStrategy.toUpperCase(),
      this.secondPlayerStrategy.toUpperCase(), this.secondPlayerWarStrategy.toUpperCase());
    this.restWarService.getStatisticsAndDetectCycles(playersStrategyDTO).subscribe(
      stats => {
        this.stats = stats;
      },
      () => {
        // Handle error if needed
      },
      () => {
        this.loading = false; // Hide the spinner when the request is complete
      }
    );
  }

  getStatisticsWithBreakingCycles() {
    this.loading = true; // Show the spinner
    const playersStrategyDTO = new PlayersStrategyDTO(this.firstPlayerStrategy.toUpperCase(), this.firstPlayerWarStrategy.toUpperCase(),
      this.secondPlayerStrategy.toUpperCase(), this.secondPlayerWarStrategy.toUpperCase());
    this.restWarService.getStatisticsWithBreakingCycles(playersStrategyDTO).subscribe(
      stats => {
        this.stats = stats;
      },
      () => {
        // Handle error if needed
      },
      () => {
        this.loading = false; // Hide the spinner when the request is complete
      }
    );
  }
}
