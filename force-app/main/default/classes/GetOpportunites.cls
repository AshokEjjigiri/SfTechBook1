public with sharing class GetOpportunites {
    public GetOpportunites() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOppList(){
        try {
            return [select id,CloseDate,Amount,Name,AccountId from Opportunity];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}