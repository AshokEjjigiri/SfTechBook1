import { LightningElement,wire,track } from 'lwc';
import getAccountss from '@salesforce/apex/GetAccountsWire.getAccountss';

export default class SearchAccount5_12_23 extends LightningElement {
    @track accountName='';
    @track accountList=[];
    
    
    @wire(getAccountss,{actName:'$accountName'})
    retrieveAccounts(error,data){
        if(data){
            console.log('list1',data)
            this.accountList=data;
            console.log('list',this.accountList);
        }else if(error){
            //this.error=undefined;
        }
    }
    handleKeyChange(event){
   this.accountName=event.target.value;
    }
}