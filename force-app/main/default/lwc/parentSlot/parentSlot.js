import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ParentSlot extends LightningElement {

    activeSlot;
    displaySlotInfo=false;

    valueForChild;


    onGoToRecord(){
        const event = new ShowToastEvent({
            title: 'message du composant parent',
            message:
                'L\'utilisateur a cliqué sur un bouton géré par le parent'
        });
        this.dispatchEvent(event);
    }


    onChange(event){
        this.valueForChild=event.target.value;
    }

    pushToSlot1(){
        this.reset();
        this.displaySlotInfo=true;
        this.activeSlot="slot1";
    }
    pushToSlot2(){
        this.reset();
        this.displaySlotInfo=true;
        this.activeSlot="slot2";
    }
    pushToSlot(){
        this.reset();
        this.displaySlotInfo=true;
        this.activeSlot="";
    }
    hideSlot(){
        this.reset();
        this.displaySlotInfo=false;
        this.refs.childSlot.hideSlot(true);
    }

    reset(){
        this.slot1=false;
        this.slot2=false;
        this.slot=false;
        this.noslot=false;
        this.template.querySelector('c-child-slot').hideSlot(false);
    }

}