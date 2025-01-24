import java.util.Scanner;

class Test2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Amulya Jain 500122439");
        System.out.println("Enter the radius of the circle");
        double r = sc.nextDouble();
        double area = 3.14 * r * r;
        System.out.println("Area of the circle is " + area);
    }
}
