import { LightningElement } from 'lwc';

export default class ExpenseTracker extends LightningElement {
    expenses = [
        {name: 'Grocery Shopping', category: 'Food', amount: 85, date: 'Jan 15', class: 'odd'},
        {name: 'Gas', category: 'Transportation', amount: 45, date: 'Jan 12', class: 'even'},
        {name: 'School', category: 'Education', amount: 75, date: 'Jan 01', class: 'odd'},
        {name: 'Rent', category: 'Rent', amount: 45, date: 'Jan 12', class: 'even'},
        {name: 'Courses', category: 'Education', amount: 150, date: 'Jan 08', class: 'odd'},
        {name: 'Internet', category: 'Rent', amount: 15, date: 'Jan 01', class: 'even'}
    ];
}