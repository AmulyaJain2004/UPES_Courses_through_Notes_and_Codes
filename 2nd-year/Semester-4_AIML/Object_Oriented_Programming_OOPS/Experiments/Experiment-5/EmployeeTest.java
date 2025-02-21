// need to be done by me
class Employee {
    String name;
    int empid;
    double salary;

    public Employee() {
        this.name = "Unknown";
        this.empid = 0;
        this.salary = 0.0;
    }

    public Employee(String name, int empid, double salary) {
        this.name = name;
        this.empid = empid;
        this.salary = salary;
    }

    public double getSalary() {
        return salary;
    }

    public void increaseSalary(double percentage) {
        salary += salary * (percentage / 100);
    }

    public void display() {
        System.out.println("Employee ID: " + empid + ", Name: " + name + ", Salary: " + salary);
    }
}

class Manager extends Employee {
    String department;

    public Manager(String name, int empid, double salary, String department) {
        super(name, empid, salary);
        this.department = department;
    }

    public void display() {
        System.out.println("Manager ID: " + empid + ", Name: " + name + ", Salary: " + salary + ", Department: " + department);
    }
}

public class EmployeeTest {
    public static void main(String[] args) {
        Employee e = new Employee("John Doe", 101, 50000);
        Manager m = new Manager("Alice Smith", 201, 80000, "IT");

        e.display();
        m.display();

        e.increaseSalary(10);
        m.increaseSalary(15);

        System.out.println("After salary increase:");
        e.display();
        m.display();
    }
}
