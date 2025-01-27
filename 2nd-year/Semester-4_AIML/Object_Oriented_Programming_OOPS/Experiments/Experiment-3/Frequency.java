import java.util.*;
class Frequency {
    public static void main (String args[])
    {
        Scanner s = new Scanner(System.in);
        System.out.println("Amulya Jain 500122439");
        System.out.println("Enter the size of the array: ");
        int n = s.nextInt();
        int arr[] = new int[n];
        System.out.println("Enter the elements of the array: ");
        for (int i = 0; i < n; i++) 
        {
            arr[i] = s.nextInt();
        }
        System.out.println("Enter element to find count: ");
        int target = s.nextInt();
        int count = 0;
        for (int i = 0; i < n; i++) 
        {
            if (arr[i] == target) 
            {
                count++;
            }
        }
        System.out.println("Count of " + target + ": " + count);
    }
    
}
