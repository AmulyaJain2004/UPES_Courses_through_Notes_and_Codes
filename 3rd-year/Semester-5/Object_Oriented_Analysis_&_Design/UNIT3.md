## 🧩 Unit III: Basic Behavioral Modeling 
### 🔹 1. Use Case Modeling

#### 📘 Concepts

- Captures functional **requirements** of a system.
    
- Shows **interactions** between users (actors) and system.
    
- Helps identify **goals** of the system from the user's perspective.
    

#### 🔧 Components

- **Actors**: External users/entities.
    
- **Use Cases**: Specific functionalities provided by the system.
    
- **System Boundary**: Defines the scope of the system.
    
- **Associations**: Interactions between actor and use case.
    

#### 🤪 Mnemonic:

**"Actor Use karta hai System mein Case file!"**

#### ✅ Example:

```plaintext
Actor: Customer
Use Case: Withdraw Money
System: ATM
```

---

### 🔹 2. Use Case Diagram (UCD) using UML Notation

#### 📘 Concepts

- Graphical representation of **who** interacts with **what functionality**.
    
- Best for high-level requirement visualization.
    

#### ✍️ Elements in UML

- Actor → Stick figure
    
- Use Case → Oval
    
- System → Box enclosing use cases
    
- Association → Line connecting actor and use case
    

#### 🤪 Mnemonic:

**"Oval mein case, line mein chase!"**

#### ✅ Example:

```plaintext
Customer ---------> (Withdraw Cash)
                    (Check Balance)
```

---

### 🔹 3. Use Case Diagram Extensions & Variations

#### 📘 Relationships

- **Include**: One use case always invokes another. (Reusability)
    
- **Extend**: Optional or conditional functionality.
    
- **Generalization**: Actors/use-cases inherit behavior.
    

#### 🤪 Mnemonic:

**"Include matlab must, Extend matlab kabhi-kabhi!"**

#### ✅ Example:

```plaintext
(Withdraw Cash) ----> <<include>> (Authenticate User)
(Transfer Funds) ----> <<extend>> (Notify User)
```

---

### 🔹 4. Use Case Descriptions

#### 📘 Types

- **Brief**: 1-2 sentences.
    
- **Casual**: Paragraph-style.
    
- **Fully Dressed**: Detailed template.
    

#### 📋 Template for Fully Dressed

```markdown
### Use Case: Withdraw Money
- Actor: Customer
- Precondition: ATM is operational
- Main Flow:
  1. Insert card
  2. Enter PIN
  3. Select amount
  4. Dispense cash
- Alternate Flow:
  - If PIN incorrect → Retry or cancel
- Postcondition: Cash dispensed or transaction canceled
```

#### 🤪 Mnemonic:

**"Fully Dressed matlab sab details wali shaadi ki story!"**

---

### 🔹 5. Activity Diagrams

#### 📘 Concepts

- Represents **workflow or process flow**.
    
- Focuses on **actions**, **decisions**, **forks**, and **merges**.
    
- Similar to flowcharts.
    

#### ⛓️ Components

- Start/End nodes
    
- Actions
    
- Decision (Diamond)
    
- Fork (Parallel)
    
- Swimlanes (for responsibilities)
    

#### 🤪 Mnemonic:

**"Activity mein action hi action, kabhi decision, kabhi reaction!"**

#### ✅ Example Java Pseudo Flow: Login System

```plaintext
[Start] --> (Enter Username)
         --> (Enter Password)
         --> [Decision: Correct?]
           --> Yes: (Login Success) --> [End]
           --> No: (Show Error) --> (Retry)
```

---

### 🔹 6. State Diagrams

#### 📘 Concepts

- Shows **different states** of a system/object over time.
    
- Transitions triggered by **events** and guarded by **conditions**.
    

#### Components

- States (Rounded Rectangles)
    
- Transitions (Arrows with event/guard/action)
    

#### 🤪 Mnemonic:

**"State mein kya haal hai? Event ne badlaal hai!"**

#### ✅ Java Example: Traffic Light

```java
enum TrafficLightState { RED, GREEN, YELLOW }

public class TrafficLight {
    TrafficLightState state;

    public void change() {
        switch (state) {
            case RED: state = TrafficLightState.GREEN; break;
            case GREEN: state = TrafficLightState.YELLOW; break;
            case YELLOW: state = TrafficLightState.RED; break;
        }
    }
}
```

---

### 🔹 7. Swimlanes Design Architecture

#### 📘 Concepts

- Used in **activity diagrams**.
    
- Divides responsibilities among actors/components.
    
- Helps visualize **who does what**.
    

#### 🤪 Mnemonic:

**"Swimlane mein sabki apni swimming pool!"**

#### ✅ Example:

```plaintext
Customer Lane        ATM Machine Lane
--------------       -----------------
(Insert Card)   →     (Validate Card)
(Enter PIN)     →     (Verify PIN)
```

---

## 🎯 Summary Table

|Concept|UML Element|Hinglish Mnemonic|
|---|---|---|
|Use Case Modeling|Actor, Use Case|"Actor Use karta hai Case file!"|
|UCD|Oval & Stickman|"Oval mein case, line mein chase!"|
|Include/Extend|Arrow with label|"Include must, Extend kabhi-kabhi!"|
|Activity Diagrams|Arrows & Actions|"Action hi action, decision reaction!"|
|State Diagrams|States & Events|"State ka haal, event ne badlaal!"|
|Swimlanes|Columns by role|"Sabki apni swimming pool in swimlane!"|

---
