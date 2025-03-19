class MyThread2 extends Thread{
    public void run(){        
        for(int i=1;i<=3;i++){
            System.out.println("Thread 2 is running: " + i);
        }
    }
}


class MyThread1 extends Thread{
    public void run(){
        for(int i=1;i<=3;i++){
            System.out.println("Thread 1 is running: " + i);
        }
    }
}

class MyThread3 extends Thread {
    public void run(){
        MyThread2 m2 = new MyThread2();
        m2.run();
        for(int i=1;i<=3;i++){
            System.out.println("Thread 3 is running: " + i);
        }
    }
}

class threads{
    public static void main(String[] args){
        MyThread1 m1 = new MyThread1();
        m1.start();
        System.out.println("Hello");
        m1.start();
    }
}