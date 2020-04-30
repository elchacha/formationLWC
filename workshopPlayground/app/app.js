import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {

    // ensemble des informations utilisés par mon template html.
    // WARNING : le track n'est pas obligatoire pour les 2 tableaux : POURQUOI ???
    // je préfère le mettre pour me rappeler qu'il s'agit de tableaux néanmoins
    objecttype='Contact';
    @track labels;
    @track linesvalues;

    // pas besoin de track cet objet, il n'est pas utilisé par mon template html
    queryResult;

    query='select Email ,Name ,LastName ,CreatedDate  from Contact limit 5';


    connectedCallback(){
        this.queryResult = [{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHMRAA5"},"Email":"bob.frederick@trainingorg-robertshotelsresorts.com","Name":"Bob Frederick","LastName":"Frederick","CreatedDate":"2020-04-20T11:30:24.000+0000","Id":"0032500001GSHMRAA5","RecordTypeId":"01225000000hjTFAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHMSAA5"},"Email":"mcummings@training.roboindustries.com","Name":"Miriam Cummings","LastName":"Cummings","CreatedDate":"2020-04-20T11:30:24.000+0000","Id":"0032500001GSHMSAA5","RecordTypeId":"01225000000hjTFAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHMTAA5"},"Email":"lenny.howe@trainingorg-rochir.com","Name":"Lenny Howe","LastName":"Howe","CreatedDate":"2020-04-20T11:30:24.000+0000","Id":"0032500001GSHMTAA5","RecordTypeId":"01225000000hjTFAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNIAA5"},"Email":"efranklin@example.com","Name":"Emma Franklin","LastName":"Franklin","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNIAA5","RecordTypeId":"01225000000hjTFAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNJAA5"},"Email":"owen.granger@trainingorg-universalmotors.com","Name":"Owen Granger","LastName":"Granger","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNJAA5","RecordTypeId":"01225000000hjTFAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNKAA5"},"Email":"andy.smith@trainingorg-universaltechnologies.com","Name":"Andy Smith","LastName":"Smith","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNKAA5","RecordTypeId":"01225000000hjTFAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNLAA5"},"Name":"Steph Smith","LastName":"Smith","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNLAA5","RecordTypeId":"01225000000hjTFAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNMAA5"},"Email":"danny.yamener@trainingorg-vandelayindustries.com","Name":"Danny Yamener","LastName":"Yamener","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNMAA5","RecordTypeId":"01225000000hjTFAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNNAA5"},"Email":"jon.amos@trainingorg-vandelayindustries.com","Name":"Jon Amos","LastName":"Amos","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNNAA5","RecordTypeId":"01225000000hjTFAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNOAA5"},"Email":"deborah.fields@trainingorg-vandelayindustries.com","Name":"Deborah Fields","LastName":"Fields","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNOAA5","RecordTypeId":"01225000000hjTFAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNXAA5"},"Email":"aridley@example.com","Name":"Adam Ridley","LastName":"Ridley","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNXAA5","RecordTypeId":"01225000000hjTFAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNYAA5"},"Email":"kevin.adams@trainingorg-westairlines.com","Name":"Kevin Adams","LastName":"Adams","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNYAA5","RecordTypeId":"01225000000hjTFAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNZAA5"},"Email":"curtis.maughlin@trainingorg-westairlines.com","Name":"Curtis Maughlin","LastName":"Maughlin","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNZAA5","RecordTypeId":"01225000000hjTFAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNaAAP"},"Email":"drivera@example.com","Name":"Dominic Rivera","LastName":"Rivera","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNaAAP","RecordTypeId":"01225000000hjTFAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNbAAP"},"Email":"awestbrook-training@example.com","Name":"Andrew Westbrook","LastName":"Westbrook","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNbAAP","RecordTypeId":"01225000000hjTGAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNcAAP"},"Email":"ypeng-training@example.com","Name":"Yanlin Peng","LastName":"Peng","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNcAAP","RecordTypeId":"01225000000hjTGAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNdAAP"},"Email":"cmorgan-training@example.com","Name":"Cameron Morgan","LastName":"Morgan","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNdAAP","RecordTypeId":"01225000000hjTGAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNeAAP"},"Email":"jhamdun-training@example.com","Name":"Jane Hamdun","LastName":"Hamdun","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNeAAP","RecordTypeId":"01225000000hjTGAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNfAAP"},"Email":"emcarthur-training@example.com","Name":"Emma McArthur","LastName":"McArthur","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNfAAP","RecordTypeId":"01225000000hjTFAAY"},{"attributes":{"type":"Contact","url":"/services/data/v48.0/sobjects/Contact/0032500001GSHNgAAP"},"Email":"tzubkov-training@example.com","Name":"Tia Zubkov","LastName":"Zubkov","CreatedDate":"2020-04-20T11:30:26.000+0000","Id":"0032500001GSHNgAAP","RecordTypeId":"01225000000hjTGAAY"}];
        this.calculateLabels();
        this.calculateFields([]);
    }


    runQuery(){
        this.queryResult = [{"attributes":{"type":"Course_Delivery__c","url":"/services/data/v48.0/sobjects/Course_Delivery__c/a0425000007ROVlAAO"},"Id":"a0425000007ROVlAAO","Name":"DELIVERY-00000","Country__c":"Japan","Status__c":"Delivered","Instructor__c":"00525000005tP5GAAU","Location__c":"Tokyo, JP","Instructor__r":{"attributes":{"type":"User","url":"/services/data/v48.0/sobjects/User/00525000005tP5GAAU"},"Id":"00525000005tP5GAAU","Name":"Akira Kato"}},{"attributes":{"type":"Course_Delivery__c","url":"/services/data/v48.0/sobjects/Course_Delivery__c/a0425000007ROVmAAO"},"Id":"a0425000007ROVmAAO","Name":"DELIVERY-00001","Country__c":"United States","Status__c":"Delivered","Instructor__c":"00525000005tP5LAAU","Location__c":"San Francisco, US","Instructor__r":{"attributes":{"type":"User","url":"/services/data/v48.0/sobjects/User/00525000005tP5LAAU"},"Id":"00525000005tP5LAAU","Name":"Raymond Montoya"}},{"attributes":{"type":"Course_Delivery__c","url":"/services/data/v48.0/sobjects/Course_Delivery__c/a0425000007ROVnAAO"},"Id":"a0425000007ROVnAAO","Name":"DELIVERY-00002","Country__c":"France","Status__c":"Cancelled","Instructor__c":"00525000005tP5NAAU","Location__c":"Paris, FR","Instructor__r":{"attributes":{"type":"User","url":"/services/data/v48.0/sobjects/User/00525000005tP5NAAU"},"Id":"00525000005tP5NAAU","Name":"Viviane Boudin"}},{"attributes":{"type":"Course_Delivery__c","url":"/services/data/v48.0/sobjects/Course_Delivery__c/a0425000007ROVoAAO"},"Id":"a0425000007ROVoAAO","Name":"DELIVERY-00003","Country__c":"Singapore","Status__c":"Cancelled","Instructor__c":"00525000005tP5JAAU","Location__c":"Singapore, SG","Instructor__r":{"attributes":{"type":"User","url":"/services/data/v48.0/sobjects/User/00525000005tP5JAAU"},"Id":"00525000005tP5JAAU","Name":"Kim Tran"}},{"attributes":{"type":"Course_Delivery__c","url":"/services/data/v48.0/sobjects/Course_Delivery__c/a0425000007ROVpAAO"},"Id":"a0425000007ROVpAAO","Name":"DELIVERY-00004","Country__c":"United Kingdom","Status__c":"Delivered","Instructor__c":"00525000005tP5IAAU","Location__c":"London, GB","Instructor__r":{"attributes":{"type":"User","url":"/services/data/v48.0/sobjects/User/00525000005tP5IAAU"},"Id":"00525000005tP5IAAU","Name":"Heidi Rosen"}},{"attributes":{"type":"Course_Delivery__c","url":"/services/data/v48.0/sobjects/Course_Delivery__c/a0425000007ROVqAAO"},"Id":"a0425000007ROVqAAO","Name":"DELIVERY-00005","Country__c":"United States","Status__c":"Delivered","Instructor__c":"00525000005tP5MAAU","Location__c":"Chicago, US","Instructor__r":{"attributes":{"type":"User","url":"/services/data/v48.0/sobjects/User/00525000005tP5MAAU"},"Id":"00525000005tP5MAAU","Name":"Sasha Vincent"}},{"attributes":{"type":"Course_Delivery__c","url":"/services/data/v48.0/sobjects/Course_Delivery__c/a0425000007ROVrAAO"},"Id":"a0425000007ROVrAAO","Name":"DELIVERY-00006","Country__c":"Canada","Status__c":"Delivered","Instructor__c":"00525000005tP5KAAU","Location__c":"Toronto, CA","Instructor__r":{"attributes":{"type":"User","url":"/services/data/v48.0/sobjects/User/00525000005tP5KAAU"},"Id":"00525000005tP5KAAU","Name":"Patrick Hughes"}},{"attributes":{"type":"Course_Delivery__c","url":"/services/data/v48.0/sobjects/Course_Delivery__c/a0425000007ROVsAAO"},"Id":"a0425000007ROVsAAO","Name":"DELIVERY-00007","Country__c":"Japan","Status__c":"Cancelled","Instructor__c":"00525000005tP5GAAU","Location__c":"Tokyo, JP","Instructor__r":{"attributes":{"type":"User","url":"/services/data/v48.0/sobjects/User/00525000005tP5GAAU"},"Id":"00525000005tP5GAAU","Name":"Akira Kato"}},{"attributes":{"type":"Course_Delivery__c","url":"/services/data/v48.0/sobjects/Course_Delivery__c/a0425000007ROVtAAO"},"Id":"a0425000007ROVtAAO","Name":"DELIVERY-00008","Country__c":"France","Status__c":"Cancelled","Instructor__c":"00525000005tP5NAAU","Location__c":"Paris, FR","Instructor__r":{"attributes":{"type":"User","url":"/services/data/v48.0/sobjects/User/00525000005tP5NAAU"},"Id":"00525000005tP5NAAU","Name":"Viviane Boudin"}},{"attributes":{"type":"Course_Delivery__c","url":"/services/data/v48.0/sobjects/Course_Delivery__c/a0425000007ROVuAAO"},"Id":"a0425000007ROVuAAO","Name":"DELIVERY-00009","Country__c":"Japan","Status__c":"Delivered","Instructor__c":"00525000005tP5GAAU","Location__c":"Tokyo, JP","Instructor__r":{"attributes":{"type":"User","url":"/services/data/v48.0/sobjects/User/00525000005tP5GAAU"},"Id":"00525000005tP5GAAU","Name":"Akira Kato"}}];
        this.calculateLabels();
        this.calculateFields([]);
    }


    save(){
        let listObjectsToSave=[];
		console.log("tr>>" + this.template.querySelectorAll(".trRecuperable").length);
        // querySelectorAll : on rechercher l'ensemble des élements qui contiennent data-object. Ici , il s'agit des tr
        this.template.querySelectorAll('.trRecuperable').forEach(tr=>{
            let objectToSave={"Id" : tr.dataset.objectid};
        // querySelectorAll : on rechercher l'ensemble des cellules td de mon tr
            tr.querySelectorAll('td').forEach( td=>{
                // on regarde si la cellule contient un input
                let input = td.querySelector('input');
                if(input){
                    // on ajoute le nom du champs et sa valeur (modifiée ou non)
                    objectToSave[input.dataset.fieldname]=input.value;
                }
                objectToSave["attributes"]={"type":this.objecttype};
            });
            // on ajoute l'objet à la liste
            listObjectsToSave.push(objectToSave);
        });
        console.log(JSON.stringify(listObjectsToSave));
    }


    calculateLabels(){
        this.labels=[];
        this.labels.push("Id");
        for (let field in this.queryResult[0]) {
            if(field=='attributes'){
                this.objecttype=this.queryResult[0][field].type;
            }
            else if(field!='RecordTypeId' && field!='Id')
                this.labels.push(field);
        }
    }

    onChangeType(event){
        this.objecttype=event.target.value;
    }


    // cette méthode va découper le résultat de la requete et en faire une liste d'objets 
    // linesvalues : values -> listes valeurs à afficher, idObject-> Id de mon objet
    // linesvalues.values : liste des cellules à afficher 
    // cell : {"label":fieldName,"value":valeur afficher,"key":counter,"editable":true/false}
    calculateFields(filters){
        this.linesvalues=[];
        let counter=0;
        this.queryResult.forEach( valuesNotFormatted =>{
            let dispValues=[];
            let idObject;
            this.labels.forEach( label =>{
                let editable=false
                if(label=='Id')idObject=valuesNotFormatted[label];
                if(filters.includes(label))editable=true;
                let cell = {"label":label,"value":valuesNotFormatted[label],"key":counter,"editable":editable};
                dispValues.push(cell);
                counter++;
            });
            counter++;
            this.linesvalues.push({"values" : dispValues,"key" : valuesNotFormatted.Id,"idObject" : idObject});
        });
    }

    // fonction qui force le recalcul des cellules à afficher ou non en fonction des choix faits
    onChangeQuery(event){
        this.query=event.target.value;
        console.log(this.query);
        console.log(this.query.indexOf(" from " + 5));
		this.objecttype = this.query.substring(this.query.indexOf(" from " + 5));
		console.log("substring " + this.query.substring(this.query.indexOf("from" + 5)));
		this.objecttype = this.objecttype.substring(0, this.objecttype.indexOf(" "));
		console.log(this.objecttype);
    }

    filters=[];

    editable(event){
        if(event.target.checked)
            this.filters.push(event.target.value);
        else
            this.filters = this.filters.filter(function(value, index, arr){ return value !=event.target.value;});
        this.calculateFields(this.filters);
    }


}
