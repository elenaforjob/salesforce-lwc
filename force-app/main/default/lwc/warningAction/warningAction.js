import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class WarningAction extends LightningModal {
    @api contactName;

    handleOkay() {
        this.close('okay');

        // Events from modal caught by the component which opened it
        // let event = new CustomEvent('confirmdelete', {
        //    detail: {
        //        contactName: this.contactName
        //    }
        // });
        // this.dispatchEvent(event);
    }

    handleDismiss() {
        this.close('dismiss');
    }
}
