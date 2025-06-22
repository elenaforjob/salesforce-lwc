import { LightningElement } from 'lwc';

export default class CalculatorCustom extends LightningElement {
    firstOperand = 0;
    secondOperand = 0;

    sum = 0;
    multiplication = 0;
    subtraction = 0;
    division = 0;

    saveFirstOperand(event) {
        let strValue = event.target.value;
        let intValue = parseInt(strValue);
        if (!!intValue) {
            this.firstOperand = intValue;
        }
    }

    saveSecondOperand(event) {
        let strValue = event.target.value;
        let intValue = parseInt(strValue);
        if (!!intValue) {
            this.secondOperand = intValue;
        }
    }

    handleClick() {
        this.sum = this.firstOperand + this.secondOperand;
        this.multiplication = this.firstOperand * this.secondOperand;
        this.subtraction = this.firstOperand - this.secondOperand;
        this.division = this.firstOperand / this.secondOperand;
    }
}
