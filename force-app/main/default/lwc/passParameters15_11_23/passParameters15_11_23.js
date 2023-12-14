import { LightningElement,track } from 'lwc';
import getCalculatorResults from '@salesforce/apex/ParametersPassingCalculater.getCalculatorResults';
export default class PassParameters15_11_23 extends LightningElement {
   @track fstnumber;
   @track scdnumber;
   @track sum;
   @track errors;
   clickHandle(){
    getCalculatorResults({firstNumber:this.fstnumber,secondNumber:this.scdnumber})
    .then(result=>{
        this.sum=result;
    })
    .catch(error=>{
        this.errors=error;
    })
   }
   changeHandle(event){
    if(event.target.name==='fnumber'){
        this.fstnumber=event.target.value;
        console.log('firstnumber',this.fstNumber);
    }
    else if(event.target.name==='snumber'){
        this.scdnumber=event.target.value;
        console.log('secondNumber',this.scdnumber);
    }

   }
}