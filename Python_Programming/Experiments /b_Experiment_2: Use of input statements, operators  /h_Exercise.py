'''
Write a program to swap two numbers without taking additional variable. 
'''
a = int (input('Enter the first number: '))
b = int (input('Enter the second number: '))

a, b = b, a
# OR
# a = a + b
# b = a - b
# a = a - b

print(f"After Swappping value of first number: {a}")
print(f"After Swappping value of second number: {b}")
