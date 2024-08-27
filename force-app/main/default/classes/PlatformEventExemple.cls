public with sharing class PlatformEventExemple {

    //PlatformEventExemple.publishPlatformEvent('une valeur pour le champs');

    public static void publishPlatformEvent(String valueForTest){
        EventBus.publish(new PlatformeEventExemple__e(field1__c=valueForTest));
        throw new GenericException('prevent the transaction to commit');
    }
}