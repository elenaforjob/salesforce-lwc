import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class SimpleNavigation extends NavigationMixin(LightningElement) {
    
    navigateToAccount() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        });
    }

    navigateToContact() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'home'
            }
        });
    }

    navigateToGoogle() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://www.google.com'
            }
        });
    }

    navigateToSpecificAccount() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '001aj000018lnMmAAI',
                objectApiName: 'Account',
                actionName: 'view'
            }
        });
    }
}
