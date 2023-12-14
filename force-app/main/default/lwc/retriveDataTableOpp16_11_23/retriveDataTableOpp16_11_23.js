import { LightningElement,wire,track } from 'lwc';
import getOppList from '@salesforce/apex/GetOpportunites.getOppList';
const columns=[{label: 'Opportunity Name', fieldName: 'Name'},
{label: 'Account Name', fieldName: 'AccountId'},
{label: 'Amount', fieldName: 'Amount'},
{label: 'Close Date', fieldName: 'CloseDate'}]
export default class RetriveDataTableOpp16_11_23 extends LightningElement {
    columns=columns;
    @track data;
    @track errors;

    @wire(getOppList) accountRecords({error, data}){
        if(data){
            this.data=data;
        }
        else if(error){
            this.errors=error;
        }

    }
}