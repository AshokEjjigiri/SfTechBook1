import { LightningElement,track } from 'lwc';
import createCases from '@salesforce/apex/AccountCreationLWC.createCases';
import CASE_STATUS from '@salesforce/schema/Case.Status';
import CASE_ORIGIN from '@salesforce/schema/Case.Origin';
import CASE_PRIORITY from '@salesforce/schema/Case.Priority';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class MultipleRecordsInsertion extends LightningElement {
    @track keyIndex=0;
    @track message;
    @track error;
    @track caseRecordsList=[{
        Status :'',
        Origin: '',
        Priority:''

    }];
    changeHandler(event){
        if(event.target.name==='caseStatus'){
            this.caseRecordsList[event.target.accessKey].Name=event.target.value;
        }
        else if(event.target.name==='casePriority'){
            this.caseRecordsList[event.target.accessKey].Priority=event.target.value;
        }
        else if(event.target.name==='caseOrigin'){
            this.caseRecordsList[event.target.accessKey].Origin=event.target.value;
        }

    }
    SaveMultipleCases(){
        createCases({caseList:this.caseRecordsList})
        .then(result=>{
            this.message=result;
            this.error=undefined;
            this.caseRecordsList.forEach(function(item){
                item.Name='';
                item.Priority='';
                item.Origin='';
            
        });
        if(this.message !== undefined) {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Accounts Created!',
                    variant: 'success',
                }),
            );
        }
        
        console.log(JSON.stringify(result));
        console.log("result", this.message);
    })
    .catch(error => {
        this.message = undefined;
        this.error = error;
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error creating records',
                message: error.body.message,
                variant: 'error',
            }),
        );
        console.log("error", JSON.stringify(this.error));
    });
}

    

    addRow(){
        this.keyIndex+1;
        this.caseRecordsList.push({
            Status :'',
            Origin: '',
            Priority:''
        })

    }
    removeRow(event){
     if(this.caseRecordsList.length>=1){
        this.caseRecordsList.splice(event.target.accessKey,1);
        this.keyIndex-1;
     }

    }

    
}