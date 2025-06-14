import { LightningElement, api } from 'lwc';
import getOpportunityProducts from '@salesforce/apex/opportunityProductsController.getOpportunityProducts';

export default class OpportunityProducts extends LightningElement {
    @api recordId;

    opportunities = [];

    columns = [
        { label: 'Product Code', fieldName: 'ProductCode' },
        { label: 'Quantity', fieldName: 'Quantity' },
        { label: 'TotalPrice', fieldName: 'TotalPrice' }
    ];

    connectedCallback() {
        getOpportunityProducts({ oppId: this.recordId })
            .then(result => {
                this.opportunities = result;
            })
            .catch(err => {
                console.log(err);
            });
    }
}