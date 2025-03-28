// Create a Java program with a Player class and derive three subclasses: Cricket_Player, Football_Player, and 
// Hockey_Player. Implement attributes such as name, age, and position, and methods like play() and train() to represent these players. 

class Player {
    String name;
    int age;
    String position;
    
    public Player(String name, int age, String position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    public void play(){
        System.out.println(name + " is playing");
    }

    public void train(){
        System.out.println(name + " is training in position " + position);
    }
}

class Cricket_Player extends Player {
    Cricket_Player(String name, int age, String position) {
        super(name, age, position);
    }

    public void play(){
        System.out.println(name + " is playing Cricket");
    }

    public void train(){
        super.train();
    }
}

class Football_Player extends Player {
    Football_Player(String name, int age, String position) {
        super(name, age, position);
    }
    public void play(){
        System.out.println(name + " is playing Football");
    }
    public void train(){
        super.train();
    }
}

class Hockey_Player extends Player {
    Hockey_Player(String name, int age, String position) {
        super(name, age, position);
    }
    public void play(){
        System.out.println(name + " is playing Hockey");
    }
    public void train(){
        super.train();
    }
}

public class MainPlay {
    public static void main(String[] args) {
        Cricket_Player p1 = new Cricket_Player("Virat", 34, "Batsman");
        Player p2 = new Football_Player("Messi", 36, "Forward");
        Player p3 = new Hockey_Player("Dhyan", 28,  "Midfielder");

        p1.play();
        p1.train();
        p2.play();
        p2.train(); 
        p3.play();
        p3.train();
    }
}