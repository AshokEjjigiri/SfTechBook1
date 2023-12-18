import { LightningElement } from 'lwc';

const columns=[{label:"Account Name", fieldName:"Name", editable:true},
               {label:"Annual Revenue", fieldName:"AnnualRevenue", editable:true},
               {label:"Phone", fieldName:"Phone", editable:true} ]

export default class DatatableInlineEdit extends LightningElement {
    columns=columns;
    saveDraftValue=[];
    data=[];
}