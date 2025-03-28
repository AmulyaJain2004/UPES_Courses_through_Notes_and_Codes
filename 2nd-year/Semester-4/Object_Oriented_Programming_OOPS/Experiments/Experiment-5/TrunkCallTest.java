// need to be done by me
import java.util.Scanner;

class TrunkCall {
    int duration;

    public TrunkCall(int duration) {
        this.duration = duration;
    }

    public double computeCharge() {
        return 0;
    }
}

class Ordinary extends TrunkCall {
    public Ordinary(int duration) {
        super(duration);
    }

    public double computeCharge() {
        return duration * 2.0;
    }
}

class Urgent extends TrunkCall {
    public Urgent(int duration) {
        super(duration);
    }

    public double computeCharge() {
        return duration * 3.0;
    }
}

class Lightning extends TrunkCall {
    public Lightning(int duration) {
        super(duration);
    }

    public double computeCharge() {
        return duration * 5.0;
    }
}

public class TrunkCallTest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter duration in minutes: ");
        int duration = sc.nextInt();
        System.out.print("Enter type (1: Ordinary, 2: Urgent, 3: Lightning): ");
        int type = sc.nextInt();

        TrunkCall call;
        if (type == 1) {
            call = new Ordinary(duration);
        } else if (type == 2) {
            call = new Urgent(duration);
        } else {
            call = new Lightning(duration);
        }

        System.out.println("Total Charge: " + call.computeCharge());
        sc.close();
    }
}
