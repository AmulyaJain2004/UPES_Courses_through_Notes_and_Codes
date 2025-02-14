// When You Must Write a Constructor in the Subclass:
// If the superclass does NOT have a no-argument constructor

// Java requires you to explicitly call a constructor of the superclass using super(parameters).


class Parent {
    Parent(int x) {  // No default constructor provided
        System.out.println("Parent constructor: " + x);
    }
}

class Child extends Parent {
    Child() {
        super(10); // Explicitly calling the superclass constructor
        System.out.println("Child constructor");
    }
}

public class main3 {
    public static void main(String[] args) {
        Child obj = new Child();
        // Output:
        // Parent constructor: 10
        // Child constructor
    }
}

// If you want to initialize subclass-specific fields

// You need to define a constructor in the subclass to initialize its own fields.

// class Parent {
//     Parent() {
//         System.out.println("Parent constructor");
//     }
// }

// class Child extends Parent {
//     int data;
//     Child(int data) {
//         super();  // Calls Parent()
//         this.data = data;
//         System.out.println("Child constructor: " + data);
//     }
// }

// public class main3 {
//     public static void main(String[] args) {
//         Child obj = new Child(5);
//         // Output:
//         // Parent constructor
//         // Child constructor: 5
//     }
// }

