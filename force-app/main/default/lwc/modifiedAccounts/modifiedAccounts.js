import { LightningElement } from 'lwc';
import getModifiedAccounts from '@salesforce/apex/ModifiedAccountsController.getModifiedAccounts';

export default class ModifiedAccounts extends LightningElement {
    accounts = [];

    columns = [
        { label: 'Name', fieldName: 'accountLink', type: 'url', typeAttributes: { label: { fieldName: 'Name' }, target: '_blank' }}
    ];

    connectedCallback() {
        getModifiedAccounts()
            .then(result => {
                result = JSON.parse(JSON.stringify(result));
                result.forEach(res => {
                    res.accountLink = '/' + res.Id;
                });
                this.accounts = result
            })
            .catch(err => {
                console.log(err);
            });
    }
}