'''
Find the greatest among two numbers. If numbers are equal than print 
“numbers are equal”.
'''
number1 = int(input("Enter the first number: "))
number2 = int(input("Enter the second number: "))

if (number1>number2):
    print("Number:",number1,"is greater than Number:",number2)
elif (number2>number1):
    print("Number:",number2,"is greater than Number:",number1)
else:
    print("Numbers",number1,"&",number2,"are equal.")
    
