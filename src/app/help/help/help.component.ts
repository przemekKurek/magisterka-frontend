import { Component, OnInit } from '@angular/core';
import {Help} from "./help.model";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor() { }

  helpList = [new Help('H', 'Gets card with higher rank first.'),
    new Help('L', 'Gets card with lower rank first.'),
    new Help('R', 'Gets card in random order.'),
    new Help('G', 'Greedy strategy. Default type. Avoid wars if you have more aces then opponent.'),
    new Help('A', 'Greedy strategy. Defensive type. Always avoid wars.'),
    new Help('N', 'Greedy strategy. Offensive type. Never avoid wars.'),
    new Help('P', 'Greedy strategy. Deterministic type. Provoke war based on predicted cards.'),
    new Help('B', 'Greedy strategy. Secure type. Provoke war if compared car is 5 or below.'),
    new Help('S', 'Greedy strategy. Provoke war based on card ranks.'),
    new Help('C', 'Greedy strategy. Provoke war based on card strength.'),
    new Help('Z', 'Greedy strategy. Avoid wars based on card strength.'),
        ]

  helpWarList = [new Help('A', 'Gets all cards from war in ascending order.'),
    new Help('D', 'Gets all cards from war in descending order.'),
    new Help('R', 'Gets all cards from war in random order.'),
  ]

  ngOnInit(): void {
  }

}
