public with sharing class BatchClassExemple  implements Database.Batchable <sObject>,Database.Stateful {

    private String param1;
    private Id param2;

    public BatchClassExemple(String param1,Id param2){
        this.param1=param1;
        this.param2=param2;
    }

    /*
        Execution :
        Database.executeBatch(new new BatchClassExemple('test','XXXXXXX'), 1);
        Database.executeBatch(new new BatchClassExemple('test','XXXXXXX'), 200);
        Database.executeBatch(new new BatchClassExemple('test','XXXXXXX'), 2000);

    */

    /*
        les 2 propriétés ci-dessous necessitent l'interface Database.Stateful pour fonctionner
    */
    private List<String> errorMsgs = new List<String> ();
    private Integer nbRecordsProcessed=0;


    public Database.QueryLocator start(Database.BatchableContext bc){
      // execute la requete meme avec 5M de records. Renvoie des batch de n records à la méthode execute
      return Database.getQueryLocator('Select Id from Contact where Id=:param1');
    }
   
    public void execute(Database.batchableContext bc, List <SObject> scope) {
        //executer ici la logique sur le batch courant
        try {
            
        } catch (Exception e) {
            errorMsgs.add(e.getMessage());
        }
        nbRecordsProcessed+=scope.size();

    }

    public void finish(Database.BatchableContext bc) {
        if(errorMsgs.size()>0){
            // Email the Batch Job's submitter that the Job is finished.
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            String[] toAddresses = new String[] {String.valueOf(UserInfo.getUserEmail())};
            mail.setToAddresses(toAddresses);
            mail.setSubject('BatchClassExemple encountered errors ');
            String msg = 'The batch Apex job processed ' + nbRecordsProcessed + ' deals with '+ errorMsgs.size() + ' failures';
            for(String error : errorMsgs){
                msg+='\n\r'+error;   
            }
            mail.setPlainTextBody(msg);
            Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
        }
    }