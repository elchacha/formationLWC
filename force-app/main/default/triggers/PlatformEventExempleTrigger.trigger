trigger PlatformEventExempleTrigger on PlatformeEventExemple__e (after insert) {

    for(PlatformeEventExemple__e pe : Trigger.new){
        system.debug('trigger PlatformEventExempleTrigger a reçu un plateforme event avec field1__c =  '+pe.field1__c);
    }

}