import { Component, OnInit } from '@angular/core';
import { Connaissance } from '../model/connaissance';

@Component({
  selector: 'app-connaissances',
  templateUrl: './connaissances.component.html',
  styleUrls: ['./connaissances.component.css']
})
export class ConnaissancesComponent implements OnInit {

  connaissances:Array<Connaissance> = [];
  constructor() { }
 
  ngOnInit() {
  this.connaissances = [
  new Connaissance('Module Angular'),
  new Connaissance('Module JavaScript'),
  new Connaissance('Module TypeScript'),
  ]
  }
}
