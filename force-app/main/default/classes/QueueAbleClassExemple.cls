public with sharing class QueueAbleClassExemple implements Queueable {

    private Contact aContact;
    private List<String> aListOfParams;

    // executé en appelant : System.enqueueJob(new QueueAbleClassExemple(null,new List<String>{'a', 'b', 'c'}));

    public QueueAbleClassExemple(Contact aContact,List<String> aListOfParams){
        this.aContact=aContact;
        this.aListOfParams=aListOfParams;
    }


    public void execute(QueueableContext context) {
        System.debug(aContact);
        System.debug(aListOfParams);
    }
}