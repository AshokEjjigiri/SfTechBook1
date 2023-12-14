import { LightningElement,api } from 'lwc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Industry from '@salesforce/schema/Account.Industry';
import Account_Id from '@salesforce/schema/Account.Id';
import Account_Phone from '@salesforce/schema/Account.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class AccounteditRecordView16_11_23 extends LightningElement {
    @api objectApiName
    @api recordId;
    fieldsList=[Account_Name, Account_Industry,Account_Phone];
    handleUpdateAccount(event){
        const evt = new ShowToastEvent({
            title:"Account update",
            message:"this"+event.detail.fields.Name.value+"Account updated successfully",
            variant:"success"  
        });
        this.dispatchEvent(evt);
    }


}