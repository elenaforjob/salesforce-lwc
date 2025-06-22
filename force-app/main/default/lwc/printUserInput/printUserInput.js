import { LightningElement } from 'lwc';

export default class PrintUserInput extends LightningElement {
    inputValue = '';

    printInputValue(event) {
        this.inputValue = event.target.value;
    }
}