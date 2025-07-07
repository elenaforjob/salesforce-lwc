import { LightningElement, api } from 'lwc';
import getRelatedContacts from '@salesforce/apex/DatatableInlineEditController.getRelatedContacts';
import saveContacts from '@salesforce/apex/DatatableInlineEditController.saveContacts';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class DatatableInlineEdit extends LightningElement {
    @api recordId;
    contacts = [];
    draftValues = [];

    columns = [
        {label: 'First Name', fieldName: 'FirstName', editable: true},
        {label: 'Last Name', fieldName: 'LastName', editable: true},
        {label: 'Email', fieldName: 'Email', type: 'email', editable: true},
        {label: 'Phone', fieldName: 'Phone', type: 'phone', editable: true},
        {label: 'Delete', type: 'button', typeAttributes: { label: 'Delete', variant: 'destructive', iconName: 'action:delete' }}
    ];

    connectedCallback() {
        getRelatedContacts({ accountId: this.recordId })
            .then(result => {
                this.contacts = result;
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleSave(event) {
        this.draftValues = event.detail.draftValues;
        this.draftValues.forEach(contact => {
            contact.AccountId = this.recordId;

            if (contact.Id === '') {
                delete contact.Id;
            }
        });

        saveContacts({ contacts: this.draftValues, accountId: this.recordId })
            .then(result => {
                this.contacts = result;
                this.draftValues = [];
                this.showToast('Success!', 'Contacts Updated', 'success');
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleCancel() {
        this.draftValues = [];
    }

    showToast(title, msg, type) {
        const event = new ShowToastEvent({
            title: title,
            message: msg,
            variant: type
        });

        this.dispatchEvent(event);
    }

    handleAddContact() {
        let newContact = {
            "Id": "",
            "FirstName": "",
            "LastName": "",
            "Email": "",
            "Phone": "",
            "AccountId": this.recordId
        };

        this.contacts = [...this.contacts, newContact];
    }

    handleDelete(event) {
        console.log
    }
}