class Course {
    String courseName;
    String courseCode;

    public Course(String courseName, String courseCode) {
        this.courseName = courseName;
        this.courseCode = courseCode;
    }

    public void displayCourse() {
        System.out.println("Course: " + this.courseName + ", Code: " + this.courseCode);
    }

    public static void main(String[] args) {
        System.out.println("Amulya Jain 500122439");
        Course c = new Course("Object-Oriented Programming", "CSEOOP");
        c.displayCourse();
    }
}
