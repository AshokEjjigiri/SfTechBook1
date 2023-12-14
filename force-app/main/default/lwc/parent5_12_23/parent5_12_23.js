import { LightningElement,track } from 'lwc';

export default class Parent5_12_23 extends LightningElement {
    @track message;
    @track messageFromChild
    SendToChild(event){
        this.message='Message from Parent';
    }
    handleChildMessage(event){
        this.messageFromChild=event.detail;

    }
}