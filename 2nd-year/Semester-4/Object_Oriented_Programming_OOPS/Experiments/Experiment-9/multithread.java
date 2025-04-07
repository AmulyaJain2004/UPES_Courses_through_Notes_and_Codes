class MyThrd1 extends Thread 

{
    
    public void run() {

        for (int i = 0; i <   53; i++  ) {
            System.out.println ("Bhai!!    Thread 1: " + i);
        }  
    }
}
class MyThrd2 extends Thread {
    public void run() {    
        for (
            int i = 0; 
            i < 17; 
            i++
        ) {
            System.out. println("Bhai !! Thread 2: "              + i);
        }
    }
}
class multithread {
    public static void main(String args[]) 
    {
        System.  out.println("Amulya Jain 500122439");
        MyThrd1 t1 = new MyThrd1();


        MyThrd2 t2 = new MyThrd2();
        t1.start()                 ;
        t2.start()                                     ;
    }



}
