import { LightningElement, api } from 'lwc';
import queryContacts from '@salesforce/apex/HelloWorldController.queryContacts';
import deleteContact from '@salesforce/apex/HelloWorldController.deleteContact';
import WarningAction from "c/warningAction";

export default class SimpleParent extends LightningElement {
    @api recordId;
    contacts = [];

    columns = [
        { label: 'First Name', fieldName: 'FirstName', type: 'text' },
        { label: 'Last Name', fieldName: 'LastName', type: 'text' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        { label: 'Email', fieldName: 'Email', type: 'email' },
        {
            label: 'Actions',
            type: 'button',
            typeAttributes: {
                label: 'Delete',
                name: 'delete',
                title: 'Delete Contact',
                disabled: false,
                value: 'delete',
                iconName: 'utility:delete',
                iconPosition: 'left',
                variant: 'destructive'
            }
        }
    ];

    connectedCallback() {
        this.loadContacts();
    }

    loadContacts() {
        queryContacts({ accountId: this.recordId })
            .then(result => {
                console.log("Result", this.contacts);
                this.contacts = result;
            })
            .catch(error => {
                console.error('Error loading contacts:', error);
            });
    }

    handleNewContact(event) {
        this.contacts = [...this.contacts, event.detail];
    }

    handleConfirmDelete(event) {
            WarningAction.open({
                contactName: event.detail.row.FirstName + ' ' + event.detail.row.LastName
            }).then((result) => {
                if (result === 'okay') {
                    this.deleteContact(event);
                } else {
                    console.log('Delete action was dismissed');
                }
            });
    }

    // handleConfirmDelete(event) {
    //        WarningAction.open({
    //            contactName: event.detail.row.FirstName + ' ' + event.detail.row.LastName,
    //            ondeleteconfirm: (result) => { this.deleteContact(event.detail.row) }
    //        });
    // }

    deleteContact(event) {
        deleteContact({ contact: event.detail.row })
            .then(() => {
                this.loadContacts();
                console.log('Contact deleted successfully');
            })
            .catch(error => {
                console.error('Error deleting contact:', error);
            });
    }
}
