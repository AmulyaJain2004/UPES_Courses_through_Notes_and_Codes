/*
 *	Create an exception class, 
 *  which throws an exception if the operand is non-numeric in calculating modules. 
 *  (Use command line arguments). 
 */
class InvalidNumericInputException extends Exception {
    public InvalidNumericInputException(String excp_name) {
        super(excp_name);
    }
}

class TestException {
    public static void checkInvalidInput(String str) throws InvalidNumericInputException {
        String temp = str;
        try {
            double db = Double.parseDouble(temp);
        } 
        catch (Exception e) {
            throw new InvalidNumericInputException("Invalid numeric input:" + str);
        }
    }
    public static void main (String []args){
        System.out.println("Amulya Jain 500122439");
        String str1 = args[0];
        String str2 = args[1];
        try {
            checkInvalidInput(str1);
            checkInvalidInput(str2);
            int num1 = Integer.parseInt(str1);
            int num2 = Integer.parseInt(str2);
            int result = num1 % num2;
            System.out.println("Result: "+ result);
        } 
        catch (InvalidNumericInputException inie) {
            System.out.println(inie);
        } 
        catch (ArithmeticException ae) {
            System.out.println("Arithmetic Exception: " + ae);
        }
    }
}