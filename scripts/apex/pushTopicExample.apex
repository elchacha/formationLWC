PushTopic pushTopic = new PushTopic();
pushTopic.Name = 'TopicSelConvocSession__c';
pushTopic.Query = 'SELECT Id,Name,SelSession__c FROM SelConvocSession__c';
pushTopic.ApiVersion = 60.0;
pushTopic.NotifyForOperationCreate = true;
pushTopic.NotifyForOperationUpdate = true;
pushTopic.NotifyForOperationUndelete = false;
pushTopic.NotifyForOperationDelete = false;
pushTopic.NotifyForFields = 'Referenced';
insert pushTopic;