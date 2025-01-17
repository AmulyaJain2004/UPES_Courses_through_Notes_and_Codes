class GreatestNum {
    public static void main (String args[])
    {
        int num1 = -3;
        int num2 = 18;
        int num3 = 0;

        if (num1 >= num2)
        {
            if (num1 >= num3)
            {
                System.out.println("Greatest number is: ");
                System.out.println(num1);
            }
            else
            {
                System.out.println("Greatest number is: ");
                System.out.println(num3);
            }
        }
        else
        {
            if (num2 >= num3)
            {
                System.out.println("Greatest number is: ");
                System.out.println(num2);
            }
            else
            {
                System.out.println("Greatest number is: ");
                System.out.println(num3);
            }
        }
    }
}
