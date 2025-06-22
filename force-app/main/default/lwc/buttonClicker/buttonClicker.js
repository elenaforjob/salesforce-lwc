import { LightningElement } from 'lwc';

export default class ButtonClicker extends LightningElement {
    counter = 0;
    label = `Clicked ${this.counter} times`;

    handleClick() {
        this.counter += 1;
        this.label = `Clicked ${this.counter} times`;
    }

    renderedCallback() {
        if (this.hasRendered) {
            return;
        }
        this.hasRendered = true;

        this.template.querySelector('.click-me-btn').label = this.label;
    }
}