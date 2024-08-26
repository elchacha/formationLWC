import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

/**
 * Show an item
 */
export default class Child extends LightningElement {
    displaySlot = false;

    @api value;

    onGoToRecord(){
        const event = new ShowToastEvent({
            title: 'message du composant enfant',
            message:
                'L\'utilisateur a cliqué sur un bouton avec la valeur : '+this.value
        });
        this.dispatchEvent(event);
    }

    @api hideSlot(disp){
        this.displaySlot=!disp;
    }

}