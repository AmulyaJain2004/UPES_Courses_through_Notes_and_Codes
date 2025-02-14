class bank {
    private double balance;

    public bank(double balance) {
        this.balance = balance;
    }

    public void deposit(double amount) {
        balance += amount;
        System.out.println("Deposited: " + amount);
    }

    protected void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: " + amount);
        } else {
            System.out.println("Insufficient funds!");
        }
    }

    void checkBalance() {
        System.out.println("Current Balance: " + balance);
    }
}

class bankaccount {
    public static void main(String[] args) {
        System.out.println("Amulya Jain 500122439");
        bank b1 = new bank(1000);
        b1.deposit(500);
        b1.withdraw(200);
        b1.checkBalance();
    }
}
