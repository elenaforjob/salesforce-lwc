import { LightningElement, wire } from 'lwc';
import getAllUsers from '@salesforce/apex/allUsersController.getAllUsers';

export default class AllUsers extends LightningElement {
    allUsers = [];

    columns = [
        { label: 'Name', fieldName: 'Name' }
    ];

    @wire(getAllUsers)
    wiredContacts({error, data}) {
        if (data) {
            this.allUsers = data;
        }
        if (error) {
            console.log(error);
        }
    }
}
