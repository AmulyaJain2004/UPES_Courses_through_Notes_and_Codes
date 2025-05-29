# 📘 Unit I: OOAD Basics (10 Hours)

## 🧠 1. Overview of Object-Oriented System Development

- Object-Oriented System Development is an approach where the system is viewed as a group of **interacting objects**.
    
- These objects represent both **data** and **behavior**.
    
- Inspired by **real-world modeling**: everything is an object.
    

### Mnemonic 🧠:

> "Real life mein sab kuch object hai — even **Tumhara Crush**! 🤭"

---

## 🧱 2. Basic Notion of Objects

- **Object**: An entity with **state (data)** and **behavior (methods)**.
    
- Has:
    
    - Identity (unique),
        
    - State (data),
        
    - Behavior (methods).
        

### Java Example:

```java
class Dog {
    String name = "Tommy";
    void bark() {
        System.out.println(name + " is barking");
    }
}
```

---

## 🔁 3. Object-Oriented Concepts

### 🔸 a. Objects

- Instance of a class.
    
- Real-world example: Car, Student, Book.
    

### 🔸 b. Classes

- Blueprint or template to create objects.
    

```java
class Car {
    String model;
    void start() {
        System.out.println("Car started");
    }
}
```

### 🔸 c. Encapsulation

- Wrapping data and methods together.
    
- Achieved using **private** fields and **public getters/setters**.
    

```java
class Account {
    private int balance = 1000;

    public int getBalance() {
        return balance;
    }

    public void deposit(int amount) {
        balance += amount;
    }
}
```

#### Mnemonic:

> "Capsule mein sab dawai hoti hai – class mein sab data hota hai!" 💊

---

### 🔸 d. Inheritance

- One class inherits properties/methods from another.
    
- **"IS-A"** relationship.
    

```java
class Animal {
    void eat() {
        System.out.println("Eating...");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Barking...");
    }
}
```

#### Mnemonic:

> "Papa ki property milti hai FREE mein – wohi inheritance!" 💸

---

### 🔸 e. Polymorphism

- Many forms of a method (Overriding or Overloading)
    

```java
class Animal {
    void speak() {
        System.out.println("Animal sound");
    }
}

class Cat extends Animal {
    void speak() {
        System.out.println("Meow");
    }
}
```

#### Mnemonic:

> "Same naam ka method – alag alag kaam... Just like boys on Instagram!" 😜

---

## ✅ 4. Benefits of OOAD

- Real-world mapping
    
- Reusability
    
- Scalability
    
- Maintainability
    
- Reduced complexity
    

#### Mnemonic:

> "OOAD se ho jaata hai coding **RAMSe**: **R**eusable, **A**daptable, **M**aintainable, **S**calable, **E**asy!"

---

## 🧱 5. Object Basics – Unified Process

- **Unified Process (UP)**: A software development process framework that uses UML.
    
- Phases:
    
    1. **Inception** – Initial idea
        
    2. **Elaboration** – Plan and risk analysis
        
    3. **Construction** – Design and coding
        
    4. **Transition** – Deployment
        

#### Mnemonic:

> "**ICE-T** process: Inception, Construction, Elaboration, Transition"

---

## 👓 6. Multiple Views of Objects

- Logical View (classes, objects)
    
- Process View (threads, performance)
    
- Development View (packages, components)
    
- Physical View (deployment)
    

#### Mnemonic:

> "Object ke bhi chaar roop – jaise heroine ki Instagram pics!" 😂

---

## 🧩 7. Modeling Concepts & Design Technique

- **Modeling**: Simplifying and understanding real-world systems.
    
- Design Technique: Choosing appropriate **abstraction** and **tools** (e.g., UML diagrams)
    

---

## 🧠 8. Analysis and Modeling

- **Analysis**: Understand problem domain (What)
    
- **Modeling**: Create abstract representation (How)
    

---

## 🧰 9. UML and Its Role in Software Development

- UML = Unified Modeling Language
    
- Standard for visualizing, specifying, constructing software systems.
    

#### Mnemonic:

> "UML – Universal Movie Language of Software!"

---

## 📊 10. UML Diagrams

### 🔸 a. Class Diagram

- Shows classes, attributes, methods, and relationships.
    

### 🔸 b. Use Case Diagram

- Shows actors and system functionalities.
    

### 🔸 c. Sequence Diagram

- Shows object interactions in a sequence.
    

---

### Java Class Diagram Example:

```java
class Customer {
    String name;
    void buyProduct(Product p) { }
}

class Product {
    String name;
    double price;
}
```

#### Mnemonic:

> "**CUSeS** Diagrams: Class, Use-case, Sequence" (pronounced "cuses" like "kisses")

---

## 🔗 11. Modeling Relationships

- **Association** – Regular connection
    
- **Aggregation** – Whole-part (weak)
    
- **Composition** – Whole-part (strong)
    
- **Generalization** – Inheritance
    

---

## 🌀 12. UML Rational Unified Process (RUP)

- RUP uses UML for modeling.
    
- Iterative and incremental
    
- Includes roles, activities, and artifacts
    

#### Mnemonic:

> "**RUP**: Roj Update Project – agile style mein!"

---

## ⚙️ 13. Procedural Computation vs OOP

|Feature|Procedural|OOP|
|---|---|---|
|Focus|Functions|Objects|
|Reusability|Low|High|
|Data Access|Global|Private/Public control|

#### Mnemonic:

> "Procedure = 'Biryani banane ka method'; OOP = 'Cook + Ingredients = Dish'"

---

## 🔁 14. Client-Server / Message Passing

- **Client-Server**: One requests, other responds.
    
- **Message Passing**: Objects communicate via method calls.
    

---
