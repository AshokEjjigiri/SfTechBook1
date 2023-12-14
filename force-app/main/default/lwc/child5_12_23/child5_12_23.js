import { LightningElement,api } from 'lwc';

export default class Child5_12_23 extends LightningElement {
    @api textMessage;
    SendDataToParent(event){
  const sendMessageFromChild=new CustomEvent('childmessage',{detail:'Hi I am Your Child'})
  this.dispatchEvent(sendMessageFromChild);
    }
}