import { LightningElement, api } from 'lwc';
import NAME_OPP_FIELD from '@salesforce/schema/Opportunity.Name';
import CLOSE_DATE_OPP_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import STAGE_NAME_OPP_FIELD from '@salesforce/schema/Opportunity.StageName';

export default class RecordEditFormOpp extends LightningElement {
    @api recordId;
    @api objectApiName;

    nameField = NAME_OPP_FIELD;
    dateField = CLOSE_DATE_OPP_FIELD;
    stageField = STAGE_NAME_OPP_FIELD;
}
