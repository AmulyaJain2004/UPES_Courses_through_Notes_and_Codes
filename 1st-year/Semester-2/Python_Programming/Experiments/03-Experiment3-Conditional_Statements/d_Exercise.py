'''
Find the greatest among three numbers assuming no two values are same.  
'''
num1 = int (input ("Enter number 1: "))
num2 = int (input ("Enter number 2: "))
num3 = int (input ("Enter number 3: "))

if ((num1 > num2) and (num2 > num3)):
    print(num1,"is greater than",num2,"and",num3)
    
elif ((num2>num3) and (num2>num1)):
    print(num2,"is greater than",num1,"and",num3)
    
elif ((num3>num1) and (num3>num2)):
    print(num3,"is greater than",num1,"and",num2)
    
elif ((num1==num2) and (num2==num3)):
    print("All the numbers are equal to each other.")
  
