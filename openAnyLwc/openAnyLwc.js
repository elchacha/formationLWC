import { LightningElement } from 'lwc';

export default class OpenAnyLwc extends LightningElement {

    //https://XXXXXXX.lightning.force.com/lightning/cmp/c__openAnyLwc

    params=[];

    lwcName;

    constructor(){
        super();
        for(let i=0;i<5;i++){
            this.params.push({'param':'param'+i,value:'value'+i});
        }
    }

    handleChange(event) {
        this.lwcName = event.detail.value;
    }


    buildUrl(){
        let attributes={};
        for(let i=0;i<5;i++){
            const apiName = this.template.querySelector('[data-param="param'+i+'"]').value;
            if(apiName){
                attributes[apiName]=this.template.querySelector('[data-param="value'+i+'"]').value;
            }
        }
        let compDefinition = {
            componentDef: "c:"+this.lwcName,
            attributes: attributes
        };

        console.log({compDefinition});
        let url = '/lightning/one/one.app#'+btoa(JSON.stringify(compDefinition));
        console.log([url]);

        window.open(url, "_blank");

    }

}