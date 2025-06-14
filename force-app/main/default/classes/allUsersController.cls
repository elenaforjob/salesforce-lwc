public with sharing class allUsersController {
    @AuraEnabled(cacheable=true)
    public static List<User> getAllUsers() {
        return [SELECT Name FROM User];
    }
}
