import { LightningElement,track } from 'lwc';
import getContacts from '@salesforce/apex/GetContactRecords.getContacts';
const columns=[{label: 'FirstName', fieldName: 'FirstName', type: 'text'},
{label: 'LastName', fieldName: 'LastName', type: 'text'},
{label: 'Email', fieldName: 'Email'}]
export default class LightningDataTableImperative14_11_23 extends LightningElement {
    @track contactRecords;
    @track errors;
     columns=columns;
    connectedCallback(){
      getContacts()
        .then(result=>{
            this.contactRecords=result;
            console.log('contacts', this.contactRecords);
        })
        .catch(error=>{
            this.errors=error;
        });
    }
    
} 