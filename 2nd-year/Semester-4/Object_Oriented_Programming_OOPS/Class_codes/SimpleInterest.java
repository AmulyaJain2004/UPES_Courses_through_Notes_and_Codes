class SimpleInterest {
    public static void main(String args[])
    {
        double principal = 1000.0;
        double rate = 2.5;
        double time = 3.0;

        double simpleInterest = (principal * rate * time) / 100;
        System.out.println("Simple Interest is: ");
        System.out.println(simpleInterest);
    }
}
