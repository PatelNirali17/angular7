import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal-cul-ator',
  templateUrl: './cal-cul-ator.component.html',
  styleUrls: ['./cal-cul-ator.component.css']
})
export class CalCulAtorComponent implements OnInit {
  longbuttons: string[] = ["AC", "CE"];
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=' ,'+'];

  constructor() { }

  ngOnInit() {
  }  

}
