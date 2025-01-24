class PrimeNum {
    public static void main(String[] args) {
        int primeCount = 0;
        int temp = 0;
        for (int i = 1; i <= 1000; i++) {
            for (int j = 2; j <= i/2; j++) {
                if (i % j == 0) {
                    temp ++;
                    break;
                }
            }
            if (temp == 0 && i != 1) {
                primeCount++;
            } 
            else {
                temp = 0;
            }
        }
        System.out.println("Total prime numbers between 1 and 1000: " + primeCount);
    }
}
