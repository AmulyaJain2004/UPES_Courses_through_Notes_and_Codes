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

    public void play(String game){
        System.out.println(this.name + " is playing " + game);
    }

    public void train(){
        System.out.println(this.name + " is training");
    }
}

class Cricket_Player extends Player {
    Cricket_Player(String name, int age, String position) {
        super(name, age, position);
    }
}

class Football_Player extends Player {

}

class Hockey_Player extends Player {

}