import { LightningElement } from 'lwc';

export default class DomExamples extends LightningElement {
    handleClick() {
        // const myButton = this.template.getElementsByClassName('.my-button');
        const divTag = this.template.querySelector('div');
        divTag.textContent = 'You clicked the button!';
        divTag.style.color = 'blue';
        divTag.style.fontSize = '20px';
        divTag.style.fontWeight = 'bold';
        divTag.style.backgroundColor = 'lightgray';
    }
}