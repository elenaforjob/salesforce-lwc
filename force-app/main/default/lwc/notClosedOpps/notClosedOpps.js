import { LightningElement } from 'lwc';
import getNotClosedOpps from '@salesforce/apex/NotClosedOppsController.getNotClosedOpps';

export default class NotClosedOpps extends LightningElement {
    opportunities = [];

    columns = [
        { 'label': 'Name', fieldName: 'Name' },
        { 'label': 'Stage', fieldName: 'StageName' },
        { 'label': 'Amount', fieldName: 'Amount' }
    ];

    connectedCallback() {
        getNotClosedOpps()
            .then(result => {
                this.opportunities = result;
            })
            .catch(err => console.log(err));
    }
}