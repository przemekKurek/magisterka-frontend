import { Component, OnInit } from '@angular/core';
import {Statistics} from "../rest/statisctics";
import {RestWarService} from "../rest/rest-war.service";

@Component({
  selector: 'app-compare-table',
  templateUrl: './compare-table.component.html',
  styleUrls: ['./compare-table.component.css']
})
export class CompareTableComponent implements OnInit {

  constructor(private restWarService: RestWarService) {
    this.statistics = [];
  }

  strategy = '';
  statistics: Statistics[];
  loading: boolean = false;

  ngOnInit(): void {
  }

  getStatistics() {
    this.loading = true; // Show the spinner

    this.restWarService.compareStrategyWithBasicStrategies(this.strategy).subscribe(
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
}
