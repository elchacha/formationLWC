import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {

    slot;
    slot1;
    slot2;
    noslot;

    onGoToRecord(){
        console.log('je passe par le parent');
    }


    pushToSlot1(){
        this.reset();
        this.slot1=true;
    }
    pushToSlot2(){
        this.reset();
        this.slot2=true;
    }
    pushToSlot(){
        this.reset();
        this.slot=true;
    }
    hideSlot(){
        this.reset();
        this.noslot=true;
        this.template.querySelector('c-child').hideSlot(true);
    }

    reset(){
        this.slot1=false;
        this.slot2=false;
        this.slot=false;
        this.noslot=false;
        this.template.querySelector('c-child').hideSlot(false);
    }


}
