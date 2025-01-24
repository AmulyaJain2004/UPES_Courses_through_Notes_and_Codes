class FinalGradeCalc {
    public static void main(String[] args) {
        float subj1 = 80;
        float subj2 = 90;
        float subj3 = 85;

        float avg_marks = (subj1 + subj2 + subj3) / 3;

        if (avg_marks >= 90)
        {
            System.out.println("Grade: A");
        }
        else if ((avg_marks >= 75)&&(avg_marks < 90))
        {
            System.out.println("Grade: B");
        }
        else if ((avg_marks >= 50)&&(avg_marks < 75))
        {
            System.out.println("Grade: C");
        }
        else
        {
            System.out.println("Grade: F");
        }
    }    
}
