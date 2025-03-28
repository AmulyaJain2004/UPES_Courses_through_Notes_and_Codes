import java.util.*;
class checkArray {
    public static void main(String [] args){
        int [] arr = {0, 0, 4, 4, 5, 100345}; 
        Scanner s = new Scanner(System.in);
        System.out.println("Amulya Jain 500122439  ");
        System.out.println("Enter index:      ");
        
        try {
            int idx = s.nextInt();
            System.out.println("Element at index " + idx + ": " + arr[idx]);
        }
        catch (ArrayIndexOutOfBoundsException e)
        {
            System.out.println(e);
        }
        finally 
        {
            System.out.println("Array access completed    ");
        }
    }
}
