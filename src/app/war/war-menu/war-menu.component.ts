import {Component, OnInit} from '@angular/core';
import {RestWarService} from "../rest/rest-war.service";

@Component({
  selector: 'app-war-menu',
  templateUrl: './war-menu.component.html',
  styleUrls: ['./war-menu.component.css']
})
export class WarMenuComponent implements OnInit {

  stats: any;
  strategy: any;
  loading: boolean = false;

  constructor(private restWarService: RestWarService) {
  }

  ngOnInit(): void {
  }

  isValid() {
    return !!this.strategy;
  }

  getStatistics(strategy: string) {
    this.loading = true; // Show the spinner

    this.restWarService.getStats(strategy).subscribe(
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


}
