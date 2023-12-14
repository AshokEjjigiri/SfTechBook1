import { LightningElement,track } from 'lwc';

export default class TestCalculaterTrackProp14_11_23 extends LightningElement {

    @track firstNumber;
    @track secondNumber;
    @track result
    @track res;
    handleChnages(event){
        if(event.target.name==='fnumber'){
        this.firstNumber=parseInt(event.target.value);
        console.log('this.firstNumber===',this.firstNumber);
    }
    
    if(event.target.name==='snumber'){
        this.secondnumber=parseInt(event.target.value);
        console.log('this.firstNumber===',this.secondnumber);
    }
    this.result=parseInt(this.firstNumber)- parseInt(this.secondnumber);
    // console.log('Addition', this.result);
    this.res=parseInt(this.firstNumber)* parseInt(this.secondnumber);
    this.res=parseInt(this.firstNumber)+ parseInt(this.secondnumber);
    console.log('multiplication',this.res);
} 
}