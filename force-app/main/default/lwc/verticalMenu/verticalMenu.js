import { LightningElement,wire, track,api } from 'lwc';
import Id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import UserNameFIELD from '@salesforce/schema/User.FirstName';
import IMAGE from "@salesforce/resourceUrl/MyInstallLogo_Navigation"; 
import DBLOGO from "@salesforce/resourceUrl/dashboardLogo_Navigation"; 
import ESTORELOGO from "@salesforce/resourceUrl/estoreLogo_Navigatin"; 
import LEGALADDENDALOGO from "@salesforce/resourceUrl/legalAddendaLogo_Navigation"; 
import MANAGEINVOICELOGO from "@salesforce/resourceUrl/manageInvoiceLogo_Navigation"; 
import PRODUCTSERVICELOGO from "@salesforce/resourceUrl/productservicesLogo_Navigation"; 
import PRODUCTGUIDELOGO from "@salesforce/resourceUrl/productguideLogo_Navigation"; 
 
export default class LwcVerticalNavigation extends LightningElement {

    myInstall = IMAGE;
    myDashboard = DBLOGO;
    myEstore = ESTORELOGO;
    myLegalAddenda = LEGALADDENDALOGO;
    myManageInvoice = MANAGEINVOICELOGO;
    myProductService = PRODUCTSERVICELOGO;
    myproductGuide = PRODUCTGUIDELOGO;
    @track error;

    @track userId = Id;
    @track currentUserName;
 
    @track currentContent = 'myinstall';
    
    @track dashboardValue = false;
    @track eStoreValue = false;
    @track legaladdendaValue = false;
    @track manageInvoicesValue = false;
    @track myinstallValue = false;
    @track productValue = false;
    @track productservicesValue = false;
    @track closeCom = false;

    @wire(getRecord, { recordId: Id, fields: [UserNameFIELD ]}) 
    currentUserInfo({error, data}) {
        if (data) {
            this.currentUserName = data.fields.FirstName.value;
            
        } else if (error) {
            this.error = error ;
        }
    }


    @track strTime = '';
    dateval;
    timeval;
    dayval;



    
    get dayValue(){
        if(this.dayval == undefined)
        {
     
     const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

     const d = new Date();
     var day = weekday[d.getDay()];
          
        }
        return day;
      }

      get monthValue(){
        if(this.monthval == undefined)
        {
            const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

            const d = new Date();
            var name = month[d.getMonth()];
            const date = new Date();

            var day = date.getDate();
                
           var dates = name +' ' + day;
          
        }
        return dates;
      }

     
      get yearValue(){
        if(this.yearval == undefined)
        {
            const date = new Date();
            var year = date.getFullYear();
        }
        return year;
      }
      
      changedate(event){
        this.dateval = event.target.value;
        
      }

      connectedCallback(){
        this.timeValue();
        this.times = setInterval(() => {
            this.timeValue();
            console.log('time ');
          }, 2000);
      }

      timeValue(){
        //if(this.timeval == undefined)
        //{
            var hours = new Date().getHours();
            var minutes = new Date().getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            this.strTime = hours + ':' + minutes ;
            //this.strTime = 'Under Maintainance';
        //}
        //return strTime;
      }



      get timeformatValue(){
        if(this.timeformatval == undefined)
        {
            var hours = new Date().getHours();
            var minutes = new Date().getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime =  ampm;
          
        }
        return strTime;
      }
    
      changedate(event){
        this.timeval = event.target.value;
        
      }
     
    changeHandleAction(event) {
        const selected = event.detail.name;  
        this.currentContent = selected;
              
        if (selected == 'dashboard'){
            this.dashboardValue = true;
        }else{
            this.dashboardValue = false;
        }

        if (selected == 'eStore'){
            this.eStoreValue = true;
        }else{
            this.eStoreValue = false;
        }
 
        if (selected == 'legaladdenda'){
            this.legaladdendaValue = true;
        }else{
            this.legaladdendaValue = false;
        }
 
        if (selected == 'manageinvoices'){
            this.manageInvoicesValue = true;
        }else{
            this.manageInvoicesValue = false;
        }
 
        if (selected == 'myinstall'){
            this.myinstallValue = true;
        }else{
            this.myinstallValue = false;
        }
 
        if (selected == 'productguide'){
            this.productValue = true;
        }else{
            this.productValue = false;
        }
 
        if (selected == 'productsservices'){
            this.productservicesValue = true;
        }else{
            this.productservicesValue = false;
        }
 
    
 
        
 
    }

    closeComponent() {
        this.closeCom = true;
    }

    togglePanel() {
        let leftPanel = this.template.querySelector("div[data-my-id=leftPanel]");
        let rightPanel = this.template.querySelector("div[data-my-id=rightPanel]");

        if (leftPanel.classList.contains('slds-is-open')) {
            leftPanel.classList.remove("slds-is-open");
            leftPanel.classList.remove("open-panel");
            leftPanel.classList.add("slds-is-closed");
            leftPanel.classList.add("close-panel");
            rightPanel.classList.add("expand-panel");
            rightPanel.classList.remove("collapse-panel");
        } else {
            leftPanel.classList.add("slds-is-open");
            leftPanel.classList.add("open-panel");
            leftPanel.classList.remove("slds-is-closed");
            leftPanel.classList.remove("close-panel");
            rightPanel.classList.remove("expand-panel");
            rightPanel.classList.add("collapse-panel");
        }
    }
}