import java.util.*;
class StringInputErrorException extends Exception {
    public StringInputErrorException(String message) {
        super(message);
    }
}
class AgeErrorException extends Exception {
    public AgeErrorException(String message) {
        super(message);
    }
}
class Employee {
    String name;
    int age;
    Employee(String name, int age){
        this.name = name;
        this.age = age;
    }
} 
class TestEmployee {
    public static void main(String[] args) throws StringInputErrorException, AgeErrorException {
        System.out.println("Amulya Jain 500122439");
        Scanner s = new Scanner(System.in);
        System.out.println("Enter name: ");
        String name = s.next();
        System.out.println("Enter age: ");
        int age = s.nextInt();
        try {
            if (name.matches("\\d+")) {
                throw new StringInputErrorException("Input should be string");
            }
            if (age > 50) {
                throw new AgeErrorException("Age must be less than 50");
            }
            Employee emp = new Employee(name, age);
            System.out.println(emp.name +" "+ emp.age);
        } 
        catch (StringInputErrorException e) {
            System.out.println(e);
        } 
        catch (AgeErrorException e) {
            System.out.println(e);
        }
    }
}
