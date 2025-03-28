import java.util.*;

class pattern {
    public static void main(String args[])
    {
        System.out.println("Amulya Jain 500122439");
        System.out.println("Enter the number of rows to be printed: ");
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        for (int i = 1; i <= n; i ++){
            if (i%2 == 0){
                for (int j = 0; j < 2*i-1; j++){
                    System.out.print("#");
                }
            }
            else{
                for (int j = 0; j <= 2*i-2; j++){
                    System.out.print("?");
                }
            }
            System.out.println();
        }
    }
}
