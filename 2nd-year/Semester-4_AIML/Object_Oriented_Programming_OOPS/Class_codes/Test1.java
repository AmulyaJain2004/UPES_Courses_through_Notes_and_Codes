import java.util.Scanner;
class Test1 {
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Amulya Jain 500122439");
        System.out.println("Enter the num");
        double a = sc.nextDouble();
        System.out.println("Enter the num");
        double b = sc.nextDouble();
        double add = a + b;
        double sub = a - b;
        double mul = a * b;
        double div = a / b;
        double power = Math.pow(a, b); 
        System.out.println("add num "+ add);
        System.out.println("sub num " + sub);
        System.out.println("mul num " + mul);
        System.out.println("div num " + div);
        System.out.println("power num " +power);
    }
}