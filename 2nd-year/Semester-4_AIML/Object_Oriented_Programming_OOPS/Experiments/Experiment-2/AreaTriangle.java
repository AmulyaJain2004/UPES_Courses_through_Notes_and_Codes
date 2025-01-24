class AreaTriangle 
{
        public static void main (String args[])
    {
        double side1 = 3.0;
        double side2 = 4.0;
        double side3 = 5.0;

        double s = (side1 + side2 + side3) / 2;
        double area = Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));

        System.out.println("Area of Triangle is: ");
        System.out.println(area);
        // name and sapid
    }
}