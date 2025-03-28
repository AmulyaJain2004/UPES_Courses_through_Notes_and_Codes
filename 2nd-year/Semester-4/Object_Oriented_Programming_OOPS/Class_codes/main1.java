class Superclass {
    Superclass() {
        System.out.println("Superclass constructor");
    }
    
    Superclass(int x) {
        System.out.println("Superclass constructor with value: " + x);
    }
}

class Subclass extends Superclass {
    Subclass() {
        // Calls the default constructor of Superclass
        super();  
        System.out.println("Subclass constructor");
    }
    
    Subclass(int x) {
        // Calls the superclass constructor with an argument
        super(x);  
        System.out.println("Subclass constructor with value: " + x);
    }
}

public class main1 {
    public static void main(String[] args) {
        Subclass obj1 = new Subclass();    // Calls the default constructors
        Subclass obj2 = new Subclass(5);   // Calls the constructor with an argument
    }
}
