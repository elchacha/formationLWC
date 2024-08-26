import { api } from 'lwc';
import LightningModal from 'lightning/modal';


export default class SimpleModal extends LightningModal {
    @api content;

    handleOkay() {
        this.close('okay');
    }

  connectedCallback(){
    console.log('starting ???');
  }

  get inputVariables() {
    return this.content.inputVariables;
  }

  get screenFlowName(){
    return this.content.screenFlowName;
  }

  get mylabel(){
    return this.content.mylabel;
  }

}