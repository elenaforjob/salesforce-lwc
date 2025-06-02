import { LightningElement } from 'lwc';

export default class OpportunityTable extends LightningElement {
    task1 = 'BV upgrade';
    status1 = 'Prospecting';
    price1 = '$600';
    date1 = '2024-05-16';

    task2 = 'Olapic integration';
    status2 = 'Closed Won';
    price2 = '$2000';
    date2 = '2024-05-15';

    task3 = 'Implement cartridge';
    status3 = 'Closed Lost';
    price3 = '$3000';
    date3 = '2024-06-18';

    task4 = 'Customize checkout';
    status4 = 'Prospecting';
    price4 = '$5000';
    date4 = '2024-08-07';

    task5 = 'Customize PDP';
    status5 = 'Closed Won';
    price5 = '$4500';
    date5 = '2024-03-15';
}