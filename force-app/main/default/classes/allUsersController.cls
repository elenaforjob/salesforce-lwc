public with sharing class allUsersController {
    @AuraEnabled(cacheable=true)
    public static List<User> getAllUsersController() {
        return [SELECT Name FROM User];
    }
}
