public with sharing class opportunityProductsController {
    @AuraEnabled
    public static List<OpportunityLineItem> getOpportunityProducts(Id oppId) {
        return [
            SELECT ProductCode, Quantity, TotalPrice
            FROM OpportunityLineItem
            WHERE OpportunityId = :oppId
        ];
    }
}