public with sharing class FutureClassExemple {
    //FutureClassExemple.demo();

    public static void demo(){
        Contact aContact = [SELECT Id, Name FROM Contact LIMIT 1];
        Id contactId = methodSynchrone(aContact);
        System.debug(' resultat methode sychro '+contactId);
        methodAsynchrone(contactId);
    }


    public static Id methodSynchrone(Contact contactRecord){
        System.debug(' affiche le contact en mode synchro '+contactRecord);
        System.debug(' transaction requestId : '+Request.getCurrent().getRequestId());
        return contactRecord.Id;
    }

    @future
    public static void methodAsynchrone(String primitiveParam){
        System.debug(' affiche le contact en mode asynchro '+[SELECT Id, Name FROM Contact WHERE Id=:primitiveParam LIMIT 1]);
        System.debug(' transaction requestId : '+Request.getCurrent().getRequestId());
    }

    @future(callout=true)
    public static void methodAsynchroneCallout(){
        // je peux appeler un webserice 
    }
}