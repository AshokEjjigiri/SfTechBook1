import { LightningElement,track,wire } from 'lwc';
import getContacts from '@salesforce/apex/GetContactRecords.getContacts';
import deleteSelectedContacts from '@salesforce/apex/GetContactRecords.deleteSelectedContacts';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const columns = [{label:'Name',fieldName:'Name'},
                      {label:'Account Name',fieldName:'AccountId'},
                      {label:'Email',fieldName:'Email'}];


export default class MassDeletionContacts28_11_23 extends LightningElement {
     @track data;
     @track errors;
     @track columns=columns;
     @track message;
     @track error1;
    @wire(getContacts) contacts({error,data}){
        
    if(data){
        
        this.data=data;
        
    }else if(error){
        this.errors=error;
    }
   }
    
    @track selectedContactIdList=[];
    
    deleteSelRecords(){
        deleteSelectedContacts({selectedIdContacts:this.selectedContactIdList})
        .then(result=>{
            this.dispatchEvent(
                new ShowToastEvent({
                    title:'Success',
                    message:'Selected contacts are deleted',
                    variant:'Success'
                }),
            )
            //for clearing selected row indexes
           // this.template.querySelector('lightning-datatable').selectedRows=[];
           return refreshApex(this.contacts);  
        })
        .catch(error=>{
            this.message=undefined;
            this.error1=error;
            this.dispatchEvent({
                title:'Error message',
                message:'contacts can not delete',
                variant:'error'
            })
        })
    }   
    prepareSelectedRows(event){
        const selectedRows=event.detail.selectedRows; 
        this.selectedContactIdList = []; 
        for (let i = 0; i < selectedRows.length; i++){           
            this.selectedContactIdList.push(selectedRows[i].Id);
        }  
        console.log(this.selectedContactIdList);       
   }            
}