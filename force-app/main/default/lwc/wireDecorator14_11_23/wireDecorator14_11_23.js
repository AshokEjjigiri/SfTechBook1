import { LightningElement,track,wire } from 'lwc';
import getAccounts from '@salesforce/apex/GetAccountsWire.getAccounts';
const columns=[{label: 'Name', fieldName: 'Name' },
               {label: 'Industry', fieldName: 'Industry' },
               {label: 'Fax', fieldName: 'Fax' },
               {label: 'ID', fieldName: 'Id' },
               {label: 'Phone', fieldName: 'Phone' }]
export default class WireDecorator14_11_23 extends LightningElement {
     @track data;
     columns=columns;
    @wire(getAccounts) accountRecords({error,data}){
        if(data){
            this.data=data;
            console.log(data);
        }
        else if(error){
            this.data=undefined;
        }
    }
}