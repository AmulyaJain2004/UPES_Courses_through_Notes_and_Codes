'''
Write a program to find simple interest. 
'''
principal = float(input("Enter the value of principal: "))
rate = float(input("Enter the value of rate: "))
time = float(input("Enter the value of time period: "))

simple_interest = (principal*rate*time)/100.0
print(f"Value of simple interest: {simple_interest}")
