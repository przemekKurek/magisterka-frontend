import { Component, OnInit } from '@angular/core';
import {Help} from "./help.model";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor() { }

  helpList = [new Help('H', 'Gets card with higher rank first'),
    new Help('L', 'Gets card with lower rank first'),
    new Help('R', 'Gets card in random order')
        ]

  ngOnInit(): void {
  }

}
