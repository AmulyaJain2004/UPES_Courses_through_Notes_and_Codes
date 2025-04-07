class eveThr extends Thread{
    public void run(){
        for( int i =0;i<20;i+=2) {


            System.out.println(" EVEn__wala thrEAD run=>"+       i);


        try{
            Thread.sleep(1000);
        }catch(Exception e){
            System.out.println(e);
            return;
      }
        }
    }
}
class oddThr extends Thread{
    public void run(){



        for( int i = 21;i<40;i+=2) {


            System.out.println(" ODd__wala thrEAD runNinG=>"+       i);
            try{
                Thread.sleep(3000);
            }catch(Exception e){
                System.out.println(e);
                return;
          }
        }

        
    }
}
class nORMAl_THR extends Thread{



    public void run(){


        System.out.println("nORMAl_THR_ ruunning");
        for( int i =40;i<60;i++){
             System.out.println("Normal__Thread is runNing: " +             i);
            }
    }
}

public class Multi_thr_multiple {
    public static void main(String[] args) {


        System.out.println("Amulya   Jain    500122439           ");


        eveThr tO1=new eveThr();
        oddThr tE2 = new oddThr();
        nORMAl_THR tN3 = new nORMAl_THR();


        tO1.start();

        tE2.start();
        tN3.start();
        try{
            tO1.join();
            tE2.join();
            tN3.join();

        }
        catch(Exception e) {
            System.out.println(e);
        }
    }
}