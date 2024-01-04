import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Statistics} from "../rest/statisctics";
import {RestWarService} from "../rest/rest-war.service";
import { Chart } from 'chart.js';


@Component({
  selector: 'app-compare-table',
  templateUrl: './compare-table.component.html',
  styleUrls: ['./compare-table.component.css']
})
export class CompareTableComponent implements AfterViewInit {

  @ViewChild('myChart')
  private chartRef!: ElementRef;
  private chart: any; // Chart.js chart instance

  constructor(private restWarService: RestWarService) {
    this.statistics = [];
  }
  ngAfterViewInit() {
    setTimeout(() => {
      // Access this.myElementRef.nativeElement here
      console.log(this.chartRef.nativeElement);
    }, 0);
  }

  strategy = '';
  statistics: Statistics[] = [];
  loading: boolean = false;

  getStatistics() {
    this.loading = true; // Show the spinner

    this.restWarService.compareStrategyWithBasicStrategies(this.strategy).subscribe(
      stats => {
        this.statistics = stats;
        this.createChart(); // Call createChart after data is loaded
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

  createChart() {
    if (this.showTable()) {
      const ctx = this.chartRef.nativeElement.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'bar', // Specify the chart type (bar, line, pie, etc.)
        data: {
          labels: ['R', 'H', 'L'],
          datasets: [{
            label: 'My Dataset',
            data: [1, 2, 3],
            backgroundColor: ['red', 'blue', 'green'],
          }]
        },
      });
    }
  }
}
