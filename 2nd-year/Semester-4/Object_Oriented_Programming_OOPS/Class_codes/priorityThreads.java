class MyThread1 extends Thread {
    public void run (){
        for (int i = 0;  i < 100; i++){
            System.out.println("Thread 1 is running: " + i);
        }
    }
}

class MyThread2 extends Thread {
    public void run (){
        for (int i = 0;  i < 5; i++){
            System.out.println("Thread 2 is running: " + i);
        }
    }
}

class MyThread3 extends Thread {
    public void run (){
        for (int i = 0;  i < 10; i++){
            System.out.println("Bhai !! Thread 3 is running: " + i);
        }
    }
}

class priorityThreads {
    public static void main(String[] args){
        MyThread1 t1 = new MyThread1();
        t1.setPriority(Thread.MIN_PRIORITY);
        MyThread2 t2 = new MyThread2();
        t2.setPriority(Thread.MAX_PRIORITY);
        MyThread3 t3 = new MyThread3();
        t1.start();
        t2.start();
        t3.start();
    }
}
