class student {

    public static int[] bubbleSort(int []arr, int n){
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
        return arr;
    }
    public static void main(String args[]) {
        String[] name = {"John", "Alice", "Bob", "Charlie", "David"};
        int[] age = {20, 22, 19, 21, 23};
        int[] newAge = age;
        newAge = bubbleSort(age, age.length);
        System.out.println("Sorted ages: ");
        for (int i = 0; i < newAge.length; i++) {
            System.out.print(newAge[i] + " ");
        }
        System.out.println("\nCorresponding names: ");
        for (int i = 0; i < newAge.length; i++) {
            for (int j = 0; j < age.length; j++) {
                if (newAge[i] == age[j]) {
                    System.out.print(name[j] + " ");
                    break;
                }
            }
        }
    }
}
