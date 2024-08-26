import { LightningElement,api,track } from 'lwc';

import {subscribe,onError} from 'lightning/empApi';


export default class PushTopicExemple extends LightningElement {

    @api sessionId='a0kKI000000UxbzYAC';
    @track msgReceived;

    	// pushTopic management
	subscription;
//	channelName='/topic/TopicSelConvocSession';

	connectedCallback() {
        this.channelName='/topic/TopicSelConvocSession?SelSession__c='+this.sessionId;
        if(this.subscription){return}
        subscribe(this.channelName, -1, this.refreshData.bind(this)).then((response) => {
            this.subscription = response;
            console.log('subscribed to :'+this.channelName)
        });
        this.registerErrorListener();
	}

    refreshData(response){
        this.msgReceived=JSON.stringify(response);
        console.log('this.msgReceived: ', JSON.stringify(response));
	}

    registerErrorListener() {
        // Invoke onError empApi method
        onError((error) => {
            console.log('Received error from server: ', JSON.stringify(error));
            // Error contains the server-side error
        });
    }

}