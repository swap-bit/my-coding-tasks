import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  previousInput = '';
  currentInput = '';
  operator = '';
  result: number| string | null = null;

  onButtonsClick(event: Event) {
    const data = (event.target as HTMLButtonElement).dataset as any;
    const selectedValue = data.value;
    if(selectedValue === '=') {
      this.result = this.getResult();
      return;
    }
    if(selectedValue === 'C') {
      this.clearSelection();
      return;
    }
    this.result = '';
    if(parseInt(selectedValue) >= 0) {
      if(this.operator) {
        this.currentInput += selectedValue
        this.result = this.currentInput;
      } else {
        this.previousInput += selectedValue;
        this.result = this.previousInput;
      }
    } else {
      this.operator = selectedValue;
      this.result = this.operator;
    }
    console.log(this.previousInput, this.operator, this.currentInput)
  }

  clearSelection() {
    this.currentInput = '';
    this.operator = '';
    this.previousInput = '';
    this.result = null;
    return;
  }

  getResult() : number{
    let result: number;
    const operator = this.operator;
    switch (operator) {
      case '+':
        result = parseInt(this.previousInput) + parseInt(this.currentInput);
        break;
      case '-':
        result = parseInt(this.previousInput) - parseInt(this.currentInput);
        break;
      case '*':
        result = parseInt(this.previousInput) * parseInt(this.currentInput);
        break;
      case '/':
        result = parseInt(this.previousInput) / parseInt(this.currentInput);
        break;
      default:
        result = 0;
        break;
    }
    return result;
  }
}
