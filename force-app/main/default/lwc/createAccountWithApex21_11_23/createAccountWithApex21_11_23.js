import { LightningElement,track } from 'lwc';
import createAccount from '@salesforce/apex/AccountCreationLWC.createAccount';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import ACCOUNT_PAN from '@salesforce/schema/Account.PAN_Number__c';
import ACCOUNT_ACTIVE from '@salesforce/schema/Account.Active__c';
import ACCOUNT_RATING from '@salesforce/schema/Account.Rating';
//import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class CreateAccountWithApex21_11_23 extends LightningElement {

@track error;
@track accountid;
 @track accountRecord={
    Name: ACCOUNT_NAME,
    Phone: ACCOUNT_PHONE,
    Industry:ACCOUNT_INDUSTRY,
    Pan:ACCOUNT_PAN,
    Active:ACCOUNT_ACTIVE,
    Rating:ACCOUNT_RATING,
 };
 handleAccountNameChange(event){
 
    this.accountRecord.Name=event.target.value;
    console.log('Name',this.accountRecord.Name);
 }
    handleAccountPhoneChange(event)
{
   
    this.accountRecord.Phone=event.target.value;
    console.log('Phone',this.accountRecord.Phone);
}
handleAccountIndChange(event){
    this.accountRecord.Industry=event.target.value;
    
    console.log('Industey',this.accountRecord.Industry);
}
handleAccountPanChange(event)
{
    this.accountRecord.Pan=event.target.value;
    console.log('Pan',this.accountRecord.Pan);
}
handleAccountActiveChange(event){
    this.accountRecord.Active=event.target.value;
    console.log('Active',this.accountRecord.Active);
}

handleAccountRatingChange(event){
    this.accountRecord.Rating=event.target.value;
    console.log('rating',this.accountRecord.Rating);
}

handleCreateAccount(){
    console.log('accrecord', this.accountRecord)
    createAccount({accountRecObj:this.accountRecord})
    .then(result=>{
        this.accountRecord={};
        console.log('aCCOUNTrEC',this.accountRecord)
        this.accountid=result.Id;
        console.log('Account id', this.accountid)
        window.console.log(this.accountid);
        const toastEvent = new ShowToastEvent({
            title:'Success',
            message:'Account Record is created successfully',
            variant:'success'

        })
        this.dispatchEvent(toastEvent);
    })
    .catch(error=>{
        this.error=error.message;
    })

}
}