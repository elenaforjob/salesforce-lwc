public with sharing class SldsGridController {
    @AuraEnabled
    public static Integer getNumberOfLeads() {
        return [
            SELECT COUNT() FROM Lead WHERE CreatedDate > LAST_MONTH
        ];
    }

    @AuraEnabled
    public static Integer getNumberOfClosedOpps() {
        return [
            SELECT COUNT() FROM Opportunity WHERE StageName != 'Closed Won' AND CreatedDate > LAST_MONTH
        ];
    }

    @AuraEnabled
    public static List<AggregateResult> getYearRevenue() {
        return [
            SELECT SUM(Amount)revenue FROM Opportunity WHERE StageName = 'Closed Won' AND CreatedDate > LAST_YEAR
        ];
    }

    @AuraEnabled
    public static Integer getNumberOfOpenCases() {
        return [
            SELECT COUNT() FROM Case WHERE Status != 'Closed' AND CreatedDate > LAST_WEEK
        ];
    }
}
