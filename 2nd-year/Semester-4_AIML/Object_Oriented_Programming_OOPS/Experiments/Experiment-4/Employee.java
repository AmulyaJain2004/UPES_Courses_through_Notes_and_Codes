class Employee {
    private int employeeID;
    private String name;
    private String department;
    private double salary;
    static int totalEmployees = 0;

    // Default Constructor
    public Employee() {
        this.employeeID = 0;
        this.name = "Unknown";
        this.department = "Not Assigned";
        this.salary = 0.0;
        totalEmployees++;
    }

    // Parameterized Constructor
    public Employee(int employeeID, String name, String department, double salary) {
        this.employeeID = employeeID;
        this.name = name;
        this.department = department;
        this.salary = salary;
        totalEmployees++;
    }

    // Method to get salary
    public double getSalary() {
        return salary;
    }

    // Method to display employee details
    public void displayEmployeeInfo() {
        System.out.println("ID: " + employeeID + ", Name: " + name + ", Department: " + department + ", Salary: " + salary);
    }

    // Static Method to display total employees
    public static void displayTotalEmployees() {
        System.out.println("Total Employees: " + totalEmployees);
    }

    public static void main(String[] args) {
        Employee e1 = new Employee(101, "Alice", "HR", 50000);
        Employee e2 = new Employee(102, "Bob", "IT", 70000);
        Employee e3 = new Employee(); // Default constructor

        e1.displayEmployeeInfo();
        e2.displayEmployeeInfo();
        e3.displayEmployeeInfo();

        displayTotalEmployees();
    }
}
