// Write a Java program to demonstrate that a private member of a superclass cannot be accessed directly from a derived class. 
class SuperCls {
    private int num = 10;
    public void display() {
        System.out.println("num = " + num);
    }
}

class SubCls extends SuperCls {
    public void display() {
        System.out.println("num is: " + num); // Error: num has private access in SuperCls
    }
    public static void main(String[] args) {
        SubCls obj = new SubCls();
        obj.display();
    }
}