public with sharing class ModifiedAccountsController {
    @AuraEnabled
    public static List<Account> getModifiedAccounts() {
        return [
            SELECT Name
            FROM Account
            WHERE LastModifiedDate = LAST_N_DAYS:10
        ];
    }
}