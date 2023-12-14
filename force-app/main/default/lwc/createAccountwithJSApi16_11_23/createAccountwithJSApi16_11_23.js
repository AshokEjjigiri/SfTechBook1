import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FILED from '@salesforce/schema/Account.Name'
import PHONE_FIELD from '@salesforce/schema/Account.Phone'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
import PAN_FIELD from '@salesforce/schema/Account.PAN_Number__c'
import ACTIVE_FIELD from '@salesforce/schema/Account.Active__c'
import RATING_FIELD from '@salesforce/schema/Account.Rating'
import { createRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class CreateAccountwithJSApi16_11_23 extends NavigationMixin(LightningElement) {
name='';
phone='';
industry='';
pan='';
active='';
rating='';



handleChange(event){
    if(event.target.label=='Name'){
        this.name=event.target.value;
    }
    if(event.target.label=='Industry'){
        this.industry=event.target.value;
    }
    if(event.target.label=='Phone'){
        this.phone=event.target.value;
    }
    if(event.target.label=='PAN'){
        this.pan=event.target.value;
    }

    if(event.target.label=='Active'){
        this.active=event.target.value;
    }

    if(event.target.label=='Rating'){
        this.rating=event.target.value;
    }
}
createAccount(){
        const fields={};
        fields[NAME_FILED.fieldApiName] = this.name;
        fields[PHONE_FIELD.fieldApiName] = this.phone;
        fields[PAN_FIELD.fieldApiName] = this.pan;
        fields[ACTIVE_FIELD.fieldApiName] = this.active;
        fields[RATING_FIELD.fieldApiName] = this.rating;
        fields[INDUSTRY_FIELD.fieldApiName] = this.industry;
        const recordInput = {apiName:ACCOUNT_OBJECT.objectApiName, fields}
        console.log('ywuq', recordInput);
        createRecord(recordInput)
          .then(account=>{
            this.accountId = account.id;
            console.log('acc', this.accountId);
            this.dispatchEvent(
                new ShowToastEvent({
                    title:'Success',
                    message:'Account Created',
                    Variant:'Success'
                })
            );
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes:{
                    recordId:account.id,
                    objectApiName:'Account',
                    actionName:'view'
                }
            })
          })
          .catch(error=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title:'Error Creating Record',
                    message:error.body.message,
                    variant:'error'
                })
            )
          })

}
}