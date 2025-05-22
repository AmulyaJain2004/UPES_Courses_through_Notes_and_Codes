number = int(input("Enter the number upto which fibonacci series has to be calculated: "))

num1 = 0
num2 = 1
print(num1, end=" ")
print(num2, end=" ")

num3 = num1 + num2
print("The fibonacci series is: -")
while num3<=number:
    print(num3, end=" ")
    num1 = num2
    num2 = num3
    num3 = num1 + num2


    