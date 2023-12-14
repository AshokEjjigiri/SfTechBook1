import { LightningElement,track } from 'lwc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Industry from '@salesforce/schema/Account.Industry';
import Account_Phone from '@salesforce/schema/Account.Phone';
import Account_PAN from '@salesforce/schema/Account.PAN_Number__c';
import Account_Active from '@salesforce/schema/Account.Active__c';
import Account_Rating from '@salesforce/schema/Account.Rating';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';


export default class AccountCreation15_11_23 extends NavigationMixin(LightningElement) {
  objectApiName='Account';
  fieldsList=[Account_Name,Account_Industry,Account_Phone,Account_PAN,Account_Active,Account_Rating];
 handleAccountCreate(event){
    const evt=new ShowToastEvent({
        title:"Account Create",
        message:"Record ID:" + event.detail.id,
        variant:"success",
    });
    this.dispatchEvent(evt);
    this[NavigationMixin.Navigate]({
        type:'standard__recordPage',
        attributes:{
            recordId:event.detail.id,
            objectApiName:'Account',
            actionName:'view'
        },
    });

 }
}