import { LightningElement } from 'lwc';
import allUsersController from '@salesforce/apex/allUsersController.getAllUsersController';

export default class AllUsers extends LightningElement {
    allUsers = [];

    columns = [
        { label: 'Name', fieldName: 'Name' }
    ];

    connectedCallback(){
        allUsersController()
            .then(data=>{
                this.allUsers = data;
            })
            .catch(err => console.log(err));
    }
}
