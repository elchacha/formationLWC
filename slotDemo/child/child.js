import { LightningElement, api } from 'lwc';

/**
 * Show an item
 */
export default class Child extends LightningElement {
    hide = false;
    onGoToRecord(){
        console.log('je passe par child ');
    }

    @api hideSlot(disp){
        this.hide=!disp;
    }

}
