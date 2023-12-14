public with sharing class GetAccountsWire {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        try {
            return [select id,name,industry, fax from Account limit 10];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountss(string actName){
        string keyAccount ='%'+actName+'%';
        try {
            return [select Id, Name, Phone,Industry from Account where Name like:keyAccount];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}