import { LightningElement } from 'lwc';
import getNumberOfLeads from '@salesforce/apex/SldsGridController.getNumberOfLeads';
import getNumberOfClosedOpps from '@salesforce/apex/SldsGridController.getNumberOfClosedOpps';
import getYearRevenue from '@salesforce/apex/SldsGridController.getYearRevenue';
import getNumberOfOpenCases from '@salesforce/apex/SldsGridController.getNumberOfOpenCases';

export default class SldsGrid extends LightningElement {
    leadsCount = 0;
    oppsCount = 0;
    revenue = 0;
    caseCount = 0;

    card1 = {};
    card2 = {};
    card3 = {};
    card4 = {};

    connectedCallback() {
        getNumberOfLeads()
            .then(result => {
                this.leadsCount = result;
                this.card1 = {title: 'New leads', number: this.leadsCount, description: 'This month'};
            })
            .catch(err => console.log(err));

        getNumberOfClosedOpps()
            .then(result => {
                this.oppsCount = result;
                this.card2 = {title: 'Closed deals', number: this.oppsCount, description: 'Last month'};
            })
            .catch(err => console.log(err));

        getYearRevenue()
            .then(result => {
                this.revenue = result[0].revenue;
                this.card3 = {title: 'Total revenue', number: this.revenue, description: 'This year'};
            })
            .catch(err => console.log(err));

        getNumberOfOpenCases()
            .then(result => {
                this.caseCount = result;
                this.card4 = {title: 'Open cases', number: this.caseCount, description: 'This week'};
            })
            .catch(err => console.log(err));
    }
}
