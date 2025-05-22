print("Calculating the Body Mass Index (BMI) of the Candidate")

weight  =  float(input("Enter the Weight of the Candidate (in kg): "))
height = float(input("Enter the Height of the Candidate (in m): "))

if (height == 0):
    print("Enter valid Height !!")
else:
    bmi = weight/(height**2)
    print("Hence, The BMI of Candidate is:",round(bmi,2))