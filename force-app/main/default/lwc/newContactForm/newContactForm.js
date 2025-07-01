import { LightningElement, api } from 'lwc';
import saveContact from '@salesforce/apex/RelatedContactsController.saveContact';

export default class NewContactForm extends LightningElement {
    @api accountId;

    firstName = '';
    lastName = '';
    email = '';
    phone = '';
    isLoaded = true;

    handleFirstNameChange(event) {
        this.firstName = event.target.value;
    }

    handleLastNameChange(event) {
        this.lastName = event.target.value;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handlePhoneChange(event) {
        this.phone = event.target.value;
    }

    handleNewContact(event) {
        this.isLoaded = !this.isLoaded;

        saveContact({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            accountId: this.accountId
        })
        .then(() => {
            this.dispatchEvent(
                new CustomEvent('newcontact', {
                    detail: {
                        FirstName: this.firstName,
                        LastName: this.lastName,
                        Email: this.email,
                        Phone: this.phone
                    }
                })
            );

            this.firstName = '';
            this.lastName = '';
            this.phone = '';
            this.email = '';

            this.isLoaded = !this.isLoaded;
        })
        .catch(err => {
            console.log(err);
            this.isLoaded = !this.isLoaded;
        });
    }
}