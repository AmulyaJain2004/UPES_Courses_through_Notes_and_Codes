number = int(input("Enter the number to find sum of its digits: "))
sum_of_digits = 0
while number>0:
    digit = number%10
    sum_of_digits += digit
    number//=10

print("Thus, the sum of digits of this number:",sum_of_digits)