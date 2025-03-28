// When You Don't Need to Write a Constructor in Subclass:
// If the superclass has a no-argument constructor, you don't need to write a constructor in the subclass. The compiler will generate it automatically

class Parent {
    Parent() { // No-arg constructor
        System.out.println("Parent constructor");
    }
}

class Child extends Parent {
    // No explicit constructor, but compiler will generate:
    // Child() {
    //     super();  // Implicit call to Parent()
    // }
}

public class main2 {
    public static void main(String[] args) {
        Child obj = new Child(); 
        // Output:
        // Parent constructor
    }
}
