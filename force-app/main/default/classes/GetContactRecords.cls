public with sharing class GetContactRecords {
    public GetContactRecords() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        try {
            return[select id, Name, FirstName, LastName, Email from contact limit 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static void deleteSelectedContacts(List<Id> selectedIdContacts){
        try {
            List<Contact> contactList=new List<Contact>();
            contactList=[select Id, FirstName, LastName from Contact where Id In : selectedIdContacts];
            if(contactList!=null && contactList.size()>0){
                delete contactList;
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}