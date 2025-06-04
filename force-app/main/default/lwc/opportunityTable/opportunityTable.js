import { LightningElement } from 'lwc';

export default class OpportunityTable extends LightningElement {
    opportunities = [
        { task: "BV upgrate", status: "Prospecting", price: "$600", date: "2024-05-16", style: "color-orange" },
        { task: "Olapic integration", status: "Closed Won", price: "$2000", date: "2024-05-18", style: "color-green" },
        { task: "Implement cartridge", status: "Closed Lost", price: "$500", date: "2024-05-14", style: "color-red" },
        { task: "Customize checkout", status: "Prospecting", price: "$800", date: "2024-07-16", style: "color-orange" },
        { task: "Customize PDP", status: "Closed Won", price: "$500", date: "2024-05-16", style: "color-green" }
    ];

    columns = [
        {label: 'Opportunity Name', fieldName: 'task'},
        {label: 'Stage', fieldName: 'status'},
        {label: 'Amount', fieldName: 'price'},
        {label: 'Close Date', fieldName: 'date'}
    ];
}
