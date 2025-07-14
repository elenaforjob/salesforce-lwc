import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class WarningAction extends LightningModal {
    @api contactName;

    handleOkay() {
        this.close('okay');
    }

    handleDismiss() {
        this.close('dismiss');
    }
}
