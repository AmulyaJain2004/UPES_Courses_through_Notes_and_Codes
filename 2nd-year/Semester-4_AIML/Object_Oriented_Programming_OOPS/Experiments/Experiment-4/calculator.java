class calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        calculator calc = new calculator();
        System.out.println("Amulya Jain 500122439");
        System.out.println("Sum (int, int): " + calc.add(5, 10));
        System.out.println("Sum (double, double): " + calc.add(2.5, 3.5));
        System.out.println("Sum (int, int, int): " + calc.add(1, 2, 3));
    }
}
