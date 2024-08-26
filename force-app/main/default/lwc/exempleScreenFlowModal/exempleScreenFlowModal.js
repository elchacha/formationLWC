import { LightningElement } from 'lwc';
import screenFlowModal from 'c/screenFlowModal';
import MyModal from 'c/simpleModal';

export default class ExempleScreenFlowModal extends LightningElement {

    result;

    async useScreenFlow(info){
        console.log('starting parent');
        const result = await screenFlowModal.open({
            size: 'small',
            description: 'Able to open any screenFlowInModal',
            content: {label : 'Un screen flow en mode modal piloté par un lwc',screenFlowName : 'testCreationConvocation' , inputVariables : [{name: 'iEtat',type: 'String',value: 'Prêt'}]}
        });
        this.result=JSON.stringify(result);
    
    }

}