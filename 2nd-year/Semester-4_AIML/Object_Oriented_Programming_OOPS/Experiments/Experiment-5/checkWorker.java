// need to be done by me
class Worker {
    String name;
    double salaryRate;

    Worker(String name, double salaryRate) {
        this.name = name;
        this.salaryRate = salaryRate;
    }

    public double computePay(int hours) {
        return 0; // This will be overridden
    }
}

class DailyWorker extends Worker {
    DailyWorker(String name, double salaryRate) {
        super(name, salaryRate);
    }

    public double computePay(int hours) {
        return salaryRate * (hours / 8);
    }
}

class SalariedWorker extends Worker {
    SalariedWorker(String name, double salaryRate) {
        super(name, salaryRate);
    }

    public double computePay(int hours) {
        return salaryRate * 40;
    }
}

class checkWorker {
    Worker w1 = new DailyWorker("John", 500);
    Worker w2 = new SalariedWorker("Alice", 600);

    // System.out.println("Daily Worker Salary: " + w1.computePay(40));
    // System.out.println("Salaried Worker Salary: " + w2.computePay(50));
}
