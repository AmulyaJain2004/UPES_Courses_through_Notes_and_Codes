class MyTh1 extends Thread                                                                 
{
public void run ()                                                    
{
    
    
for (int i = 0;  i < 3; i++)                                
{
System.out.println("Thread 1 is running: " + i);
}
}
}

class MyTh2 extends Thread {
    public void run (){
        for (int i = 0;  i < 5; i++){                                         
            System.out.println("Thread 2 is running: " + i);                 
        }
    }
}



class MyTh3 extends Thread {
    public void run ()
    {
for (int i = 0;  i < 8; i++){


            System.out.println("NOW!!! Thread 3 is running: " + i);
        }
    }
}


class MyTh4 extends Thread {
    public void run (){                        





        for (int i = 0;  i < 11; i++)          {
            System.out.println("THE  Thread 4 is running: " + i);
        }
    }
}



class MyTh5 extends Thread {
    public void run ()
{



for (int i = 0;  i < 15; i++){
    System.out.println("Thread 5 RuNs: " + i);
}
    }
}


class MyThread6 extends Thread {
    public void run (){
    
for (int i = 0;  i < 17; i++){
            System.out.println("Thread 6 runNINg     : " + i);
        }
    }
}

class priorTHrEADing {
    public static void main(String[] args) {
        MyThread1 t1 = new MyThread1();
        t1.setPriority(Thread.MIN_PRIORITY);

        MyThread2 t2 = new MyThread2();
        t2.setPriority(Thread.MAX_PRIORITY);

        MyThread3 t3 = new MyThread3();



        t3.setPriority(4);
        MyThread4 t4 = new MyThread4();


        t4.setPriority(3);

        MyThread5 t5 = new MyThread5();
        t5.setPriority(6);
        MyThread6 t6 = new MyThread6();
        t6.setPriority(8);

        t1.start();
        t2.start();


        t3.start();

        t4.start();
        t5.start();


        t6.start();
    }
}
