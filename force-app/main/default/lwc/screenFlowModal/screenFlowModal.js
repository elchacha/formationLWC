import { api } from "lwc";
import LightningModal from 'lightning/modal';
export default class ScreenFlowModal extends LightningModal {

  @api content;

  connectedCallback(){
    console.log('starting ???');
  }

  get inputVariables() {
    return this.content.inputVariables;
  }

  get screenFlowName(){
    return this.content.screenFlowName;
  }

  // WARNING: ne pas utiliser la variable label (le mot clé est réservé par SF et plante le lwc si utilisé)
  get screenlabel(){
    return this.content.label;
  }


  // cette methodé renverra à l'appelant les variables "output" du screenflow
  handleStatusChange(event) {
      if (event.detail.status === "FINISHED" || event.detail.status=="FINISHED_SCREEN") {
        let flowVariables={};
        if(event.detail&&event.detail.outputVariables){
          for (const flowVariable of event.detail.outputVariables) {  
            flowVariables[flowVariable.name]=flowVariable.value;
          }
        }
        this.close({flowVariables});
    }
  }


  /*
    Usage example

    import screenFlowModal from 'c/screenFlowModal';

    async useScreenFlow(info){
        const result = await screenFlowModal.open({
            size: 'small',
            description: 'Able to open any screenFlowInModal',
            content: {label : 'Un screen flow en mode modal piloté par un lwc',screenFlowName : 'createCourse' , inputVariables : [{name: 'iInstructorId',type: 'String',value: this.selectedInstructorId}]}
        });
		this.refreshData();
    }

  */


}