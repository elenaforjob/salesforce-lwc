import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import MY_MESSAGE_CHANNEL from '@salesforce/messageChannel/myMessageChannel__c';

export default class LmsExamlpe2 extends LightningElement {
    @wire(MessageContext)
    messageContext;

    receivedMessage = '';

    connectedCallback() {
        this.subscription = subscribe(this.messageContext, MY_MESSAGE_CHANNEL, (message) => {
            this.receivedMessage = message.messageText;
        });
    }
}
