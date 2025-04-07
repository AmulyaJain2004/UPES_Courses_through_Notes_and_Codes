class THREAD_1 implements Runnable {
    public void run() 
    {
        for (int i = 0; i < 53; i++) 
        
        {


            System.out.println("Bhai! Thread 1:             " + i);
        }
    }
}
class THREAD_2 implements Runnable {
    public void run()
    
    
              {
        for (int i = 0;                  i < 17;              i++) 
        
        
        {
            System.out.println("Broo !! Thread 2 rUN: " + i);
        }
    }
}

public class runnable_multithread                      





{

public static void main(String args[])
    
    
    
    {
        System.out.println("Amulya Jain 500122439");





        THREAD_1 rmt__1 = new THREAD_1();

        THREAD_2 rm__t2 = new THREAD_2();

        Thread t_HREAd1 = new Thread(rmt__1);


        Thread t_HREAD2 = new Thread(rm__t2);
        t_HREAd1.start();                                          






        t_HREAD2.start();


}
}
