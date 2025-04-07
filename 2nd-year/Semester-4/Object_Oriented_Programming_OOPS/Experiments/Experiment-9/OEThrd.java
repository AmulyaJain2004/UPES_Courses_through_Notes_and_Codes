class OThRead extends Thread {
    public void run() 
    {



for (int i = 1; i < 59; i+=2) 
        
        
        
    {
            
            
            System.out.println("ODD wala ThreaD           : " + i);
            
        }
    }
}


class EVNThrEAD extends Thread {
    public void run() {
        for (int i = 0; i < 60; i+=2) 
                {

System.out.println("Bhai!! Even            wala ThreAD    : " + i);

      }
}
}

public class OEThrd {
    public static void main(String[] args) 
    {
        System.out.println("Amulya Jain 500122439") ;





        OThRead t1 = new OThRead(); 
                     
        EVNThrEAD t2 = new EVNThrEAD();  

        t1.start();
        t2.start();
    }
}
