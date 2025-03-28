import java.util.*;






class Calculator {
    public static void main(String [] args){
        System.out.println("Amulya Jain 500122439");
        Scanner s = new Scanner(System.in);
        try 
        {
            int num1 = s.nextInt();


            
            int demon = s.nextInt();
            double c = num1 / demon;
            System.out.println(c);
        } 
        catch (ArithmeticException eRRR) 
        
        {
            System.out.println(eRRR + " : Bhai ! Division by zero happening");
        }
        finally 
        {
            System.out.println("OpeRatioN coMPleted");
        }
    }
}
