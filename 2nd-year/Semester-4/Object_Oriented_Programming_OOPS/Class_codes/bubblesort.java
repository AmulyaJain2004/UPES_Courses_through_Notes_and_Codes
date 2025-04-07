import java.util.Scanner;

class bubblesort {

    public static void bubbleSort(int []arr, int n){
        for (int i = 0 ; i < n-1; i ++){
            boolean swapped = false;
            for (int j = 0; j < n-i-1; j++){
                if (arr[j] > arr[j+1]){
                    int temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                    swapped = true;
                }
            }
            if (swapped == false){
                break;
            }
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of elements: ");
        int arr[] ={2, 4, 1, 3, 5};
        int n = arr.length; //sc.nextInt();
        // for (int i = 0; i < n; i++) {
        //     System.out.print("Enter element " + (i + 1) + ": ");
        //     arr[i] = sc.nextInt();
        // }
        bubbleSort(arr,n);
        System.out.println("Sorted array: ");
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
        sc.close();
    }
}
