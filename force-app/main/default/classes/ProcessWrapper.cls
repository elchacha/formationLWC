public class ProcessWrapper {
    
    @AuraEnabled (cacheable=true)
    public static ClassWrapperExample getWrapper(){
        return new ClassWrapperExample();
    }
    
    public class ClassWrapperExample{
        @AuraEnabled
        public String value;
        @AuraEnabled
        public Integer aInt;
        @AuraEnabled
		public Map<String,String> aMap;
        
        public ClassWrapperExample(){
            value='test String';
            aInt=12;
            aMap=new Map<String,String>();
            aMap.put('test','1234567');
            aMap.put('test1','45678');
            aMap.put('test2','2345');
        }
        
    }

}