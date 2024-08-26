import { LightningElement,wire } from 'lwc';
import getWrapper from '@salesforce/apex/ProcessWrapper.getWrapper';

export default class WrapperExample extends LightningElement {

    values;

    /*
    connectedCallback(){
        getWrapper().then((result) => {
            console.log('result',JSON.stringify(result));

            result.value = "nouvelle valeur";
            this.result=result;
            
        });
    }
    */

    @wire(getWrapper)
	wiredStudents(result) {
		if (result && result.data) {
			this.values = result.data;
			// si je fais cela, je tente de modifier mon objet retourné par la méthode wired, ce n'est pas permis et çà déclenche des erreurs coté console
//			result.data.value = "testne marche pas";

            this.values = JSON.parse(JSON.stringify(result.data));
			this.values.value = "nouvelle valeur";
		}
	}

}