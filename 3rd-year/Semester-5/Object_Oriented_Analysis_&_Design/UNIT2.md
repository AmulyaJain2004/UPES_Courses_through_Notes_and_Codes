## 🧠 Unit II: Basic & Advanced Structural Modeling

---

### 🔹 1. **Requirement Modeling**

#### 📌 Key Concepts

- Understand **what** the system should do (before coding)
    
- Focus on _"requirements gathering"_, _"system functionalities"_
    

#### 🔍 Types:

- **Functional Requirements** – Specific behaviors (e.g., "login")
    
- **Non-Functional Requirements** – Performance, security, etc.
    

#### 🧠 Mnemonic:

> **"Function maange, Naahi toh system hang ho jaayega!"**  
> (Functional + Non-Functional = Proper system!)

#### ✅ Example

```java
// Functional Req: A user can register
public class User {
    private String username, password;

    public void register(String u, String p) {
        this.username = u;
        this.password = p;
    }
}
```

---

### 🔹 2. **Requirement Modeling: Use Case Diagrams**

#### 📌 Key Concepts

- Models _interactions_ between **actors** and the **system**
    
- Shows **system functionality** from the user’s view
    

#### 🧠 Mnemonic:

> **"Actor aur System ki kahani – Use Case ki zubaani!"**

#### 🎯 Elements:

- **Actor** (user/external system)
    
- **Use Case** (oval → function)
    
- **System Boundary**
    
- **Includes / Extends / Generalization**
    

#### ✅ Example Use-Case: _ATM Withdrawal_

- Actor: Customer
    
- Use Case: Insert Card → Enter PIN → Withdraw Money
    

---

### 🔹 3. **Basic Structural Modeling: Class Diagrams**

#### 📌 Key Concepts

- Blueprint of classes and relationships
    
- Represents **data** + **behavior**
    

#### 🎯 Components:

- Class Name
    
- Attributes
    
- Methods
    
- Relationships: Association, Aggregation, Composition, Inheritance
    

#### 🧠 Mnemonic:

> **"Class mein naam, daulat (attributes), aur kaam (methods)!"**

#### ✅ Java Code

```java
class Person {
    String name;
    int age;

    void sayHello() {
        System.out.println("Hi, I'm " + name);
    }
}
```

---

### 🔹 4. **Modeling Relationships**

#### 📌 Types

- **Association** – Normal link (e.g., Teacher ↔ Student)
    
- **Aggregation** – "Has-A", loosely bound (e.g., Department has Teachers)
    
- **Composition** – Strong "Has-A" (e.g., House has Rooms - no house, no rooms)
    
- **Inheritance** – "Is-A" (e.g., Dog is an Animal)
    

#### 🧠 Mnemonic:

> **“Is-a, Has-a, Chhota Has-a, Chipak gaya Has-a!”**  
> (Inheritance, Association, Aggregation, Composition)

#### ✅ Java Code: Aggregation vs Composition

```java
class Engine {
    void start() {
        System.out.println("Engine starts");
    }
}

class Car {
    Engine e = new Engine(); // Composition

    void drive() {
        e.start();
        System.out.println("Car drives");
    }
}
```

---

### 🔹 5. **Common Mechanisms & Diagrams**

#### 📌 UML Mechanisms

- **Stereotypes** (<>)
    
- **Tagged Values** (`{id=001}`)
    
- **Constraints** (`{balance >= 0}`)
    

#### 🧠 Mnemonic:

> **"Stereotype, Tag daal, Constraint laga – UML superstar bana!"**

---

### 🔹 6. **Abstract Classes and Interfaces**

#### 📌 Abstract Class

- Cannot be instantiated
    
- Can have method implementations
    

#### 📌 Interface

- All methods are abstract by default
    
- Supports **multiple inheritance**
    

#### 🧠 Mnemonic:

> **"Abstract bolta hai – kaam adhura hai!"**  
> **"Interface bolta hai – sab kuch define karo bhai!"**

#### ✅ Java Example

```java
abstract class Animal {
    abstract void sound();
}

interface Flyable {
    void fly();
}
```

---

### 🔹 7. **Types and Roles**

#### 📌 Concepts

- **Type** – General classification (e.g., Employee)
    
- **Role** – Context-specific behavior (e.g., TeamLead, Developer)
    

#### 🧠 Mnemonic:

> **"Type se janm, Role se karam!"**  
> (You’re born as a type, but act by your role)

---

### 🔹 8. **Packages**

#### 📌 Purpose:

- Group related classes
    
- Provides **namespace** management
    

#### 🧠 Mnemonic:

> **"Package mein samaan, import karne ka kaam!"**

#### ✅ Java Example

```java
package university;

public class Student {
    String name;
}
```

---

### 🔹 9. **Class and Object Diagrams**

#### 📌 Differences

- **Class Diagram** – Structure & blueprint
    
- **Object Diagram** – Real-time instances with values
    

#### 🧠 Mnemonic:

> **"Class sapna hai, Object uska reality show!"**

#### ✅ Java

```java
class Book {
    String title = "OOAD in Java";
}
```

Object Diagram would show:

```
Book: title = "OOAD in Java"
```

---

### 🔹 10. **CRC Cards (Class-Responsibility-Collaborator)**

#### 📌 Technique

- **Class** name
    
- **Responsibilities** it handles
    
- **Collaborators** it depends on
    

#### 🧠 Mnemonic:

> **"CRC – Class ki Roti aur Chatni!"**  
> (Class, Responsibility, Collaborator)

---

### 🔹 11. **Design Patterns, Architectural Modeling & Framework Integration**

#### 📌 Patterns

- Singleton, Factory, Strategy, Observer, etc.
    
- **Reusable** OOP solutions
    

#### 🧠 Mnemonic:

> **"Design Pattern – baar baar kaam aane wala jugaad!"**

#### ✅ Java Example: Singleton

```java
class DBConnection {
    private static DBConnection instance = null;

    private DBConnection() {}

    public static DBConnection getInstance() {
        if (instance == null)
            instance = new DBConnection();
        return instance;
    }
}
```

---

### 🔹 12. **Advanced UML: Constraints, Derived Properties, Visibility Control**

#### 📌 Examples:

- Constraint: `{balance > 0}`
    
- Derived: `/totalMarks` → computed
    
- Visibility: `+ public`, `- private`, `# protected`
    

#### 🧠 Mnemonic:

> **"UML ka secret code: +, -, # aur {}!"**

---

### 🔹 13. **C++ Overview**

#### 🧠 Mnemonic:

> **"C++ = C mein OOP ka tadka!"**

#### 📌 Concepts

- Procedural base
    
- Object-Oriented: class, inheritance, overloading, casting
    

---
