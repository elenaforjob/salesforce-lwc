import { LightningElement } from 'lwc';

export default class ButtonDisabled extends LightningElement {
    handleClick(event) {
        event.target.disabled = true;
    }
}
