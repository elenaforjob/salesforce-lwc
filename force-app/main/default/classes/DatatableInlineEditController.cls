public with sharing class DatatableInlineEditController {
    @AuraEnabled
    public static List<Contact> getRelatedContacts(Id accountId) {
        return [
            SELECT Id, FirstName, LastName, Email, Phone
            FROM Contact
            WHERE AccountId = :accountId
        ];
    }

    @AuraEnabled
    public static List<Contact> saveContacts(List<Contact> contacts, Id accountId) {
        upsert contacts;
        return getRelatedContacts(accountId);
    }
}
