class student {
    String name;
    int age;

    public student() {
        this.name = "Default Name";
        this.age = 18;
    }

    public student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void display() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }

    public static void main(String[] args) {
        student s1 = new student(); 
        student s2 = new student("Amulya", 20);
        System.out.println("Amulya Jain 500122439");
        s1.display();
        s2.display();
    }
}
