import { LightningElement } from 'lwc';
import getAllUsers from '@salesforce/apex/allUsersController.getAllUsers';

export default class AllUsers extends LightningElement {
    allUsers = [];

    columns = [
        { label: 'Name', fieldName: 'Name' }
    ];

    connectedCallback(){
        getAllUsers()
            .then(data=>{
                this.allUsers = data;
            })
            .catch(err => console.log(err));
    }
}
