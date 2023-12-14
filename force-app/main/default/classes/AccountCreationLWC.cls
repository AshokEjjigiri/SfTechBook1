public with sharing class AccountCreationLWC {
    public AccountCreationLWC() {

    }
    @AuraEnabled
    public static Account createAccount(Account accountRecObj){
        try {
            insert accountRecObj;
            return accountRecObj;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static List<Case> createCases(List<Case> caseList){
        try {
            insert caseList;
            return caseList;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}