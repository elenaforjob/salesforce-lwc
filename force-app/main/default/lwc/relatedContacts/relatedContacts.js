import { LightningElement, api } from 'lwc';
import queryContacts from '@salesforce/apex/RelatedContactsController.queryContacts';

export default class RelatedContacts extends LightningElement {
    @api recordId;
    contacts = [];

    columns = [
        { label: 'First Name', fieldName: 'FirstName', type: 'text' },
        { label: 'Last Name', fieldName: 'LastName', type: 'text' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        { label: 'Email', fieldName: 'Email', type: 'email' }
    ];

    connectedCallback() {
        queryContacts({accountId: this.recordId})
            .then(result => {
                this.contacts = result;
            })
            .catch(e => console.log(e));
    }

    handleNewContact(event) {
        this.contacts = [...this.contacts, event.detail];
    }
}