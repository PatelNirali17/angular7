import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal-cul-ator',
  templateUrl: './cal-cul-ator.component.html',
  styleUrls: ['./cal-cul-ator.component.css']
})
export class CalCulAtorComponent implements OnInit {
  result: string = '';
  longbuttons: string[] = ["AC", "CE"];
  buttons: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+'];
  private prevValue: string = '';
  private curValue: string = '';

  constructor() { }

  ngOnInit() {
  }

  addToExpression(value: string) {
    if (this.result != '') {
      this.prevValue = this.curValue;
      this.curValue = value;
    }

    if (value == 'AC') {
      this.result = '';
    } else if (value == 'CE') {
      this.result = this.prevValue != "=" ? this.result.slice(0, -1) : this.result;
    } else if (value == '=') {
      this.result = eval(this.result);
    } else {
      this.result += value;
    }
  }
}
