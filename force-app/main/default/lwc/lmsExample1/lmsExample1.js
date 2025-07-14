import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import MY_MESSAGE_CHANNEL from '@salesforce/messageChannel/myMessageChannel__c';

export default class LmsExample1 extends LightningElement {
    @wire(MessageContext)
    messageContext;

    handleClick() {
        let message = {
            messageText: 'Hello from LMS Example 1'
        }

        publish(this.messageContext, MY_MESSAGE_CHANNEL, message);
    }
}
