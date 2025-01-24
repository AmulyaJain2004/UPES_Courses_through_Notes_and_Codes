import java.util.*;
class FibonacciSeries {
	public static void main (String []args){
		Scanner s = new Scanner(System.in);
		System.out.println("Enter the number of terms: -");
		int num = s.nextInt();
		int a = 0, b = 1;
		System.out.print("Fibonacci series: ");
		for (int i = 1; i <= num; i++) {
			System.out.print(a + " ");
			int next = a + b;
			a = b;
			b = next;
		}
	}
}