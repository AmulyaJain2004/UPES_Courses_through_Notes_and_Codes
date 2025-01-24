import java.util.*;

class SecondLargest {
    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        System.out.println("Amulya Jain 500122439");
        System.out.println("Enter the size of the array: ");
        int n = s.nextInt();
        int arr[] = new int[n];
        System.out.println("Enter the elements of the array: ");
        for (int i = 0; i < n; i++) {
            if (s.hasNextInt()) {
                arr[i] = s.nextInt();
            }
        }
        int largest = -1;
        int secLarge = -1;
        for (int i: arr) {
            if (i >= largest) {
                secLarge = largest;
                largest = i;
            }
        }
        System.out.println("Second largest element: " + secLarge);
    }
}
