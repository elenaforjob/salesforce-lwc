public with sharing class NotClosedOppsController {
    @AuraEnabled
    public static List<Opportunity> getNotClosedOpps() {
        return [
            SELECT Name, StageName, Amount
            FROM Opportunity
            WHERE StageName != 'Closed Won' AND CreatedDate > LAST_WEEK
            ORDER BY Amount DESC
        ];
    }
}