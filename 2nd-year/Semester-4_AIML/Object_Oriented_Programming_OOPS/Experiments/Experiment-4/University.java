class University {
    static String universityName = "UPES University";
    String studentName;

    // Constructor
    public University(String studentName) {
        this.studentName = studentName;
    }

    // Static Method
    static void displayUniv() {
        System.out.println("University: " + universityName);
    }

    // Non-Static Method
    void displayStu() {
        System.out.println("Student: " + studentName);
    }

    public static void main(String[] args) {
        displayUniv();

        University s1 = new University("Amulya");
        University s2 = new University("Rahul");

        s1.displayStu();
        s2.displayStu();
    }
}
