import { LightningElement } from 'lwc';

export default class ExpenseTracker extends LightningElement {
    expense1 = {name: 'Grocery Shopping', category: 'Food', amount: 85, date: 'Jan 15'};
    expense2 = {name: 'Gas', category: 'Transportation', amount: 45, date: 'Jan 12'};
    expense3 = {name: 'School', category: 'Education', amount: 75, date: 'Jan 01'};
    expense4 = {name: 'Rent', category: 'Rent', amount: 45, date: 'Jan 12'};
    expense5 = {name: 'Courses', category: 'Education', amount: 150, date: 'Jan 08'};
    expense6 = {name: 'Internet', category: 'Rent', amount: 15, date: 'Jan 01'};
}