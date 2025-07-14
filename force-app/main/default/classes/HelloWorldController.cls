public with sharing class HelloWorldController {
    @AuraEnabled
    public static List<Contact> queryContacts(Id accountId) {
        return [
            SELECT Id, FirstName, LastName, Email, Phone
            FROM Contact
            WHERE AccountId = :accountId
        ];
    }

    @AuraEnabled
    public static void deleteContact(Contact contact) {
        delete contact;
    }
}