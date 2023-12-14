public with sharing class ParametersPassingCalculater {
    public ParametersPassingCalculater() {

    }
    @AuraEnabled
    public static Integer getCalculatorResults(integer firstNumber, Integer secondNumber){
        try {
               return(firstNumber+secondNumber);
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}