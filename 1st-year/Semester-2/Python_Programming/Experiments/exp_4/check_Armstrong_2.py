number = int(input("Enter the number to check whether it is Armstrong number or not: "))

no_of_digits = 0
cpy_num = number
while cpy_num>0:
    no_of_digits+=1
    cpy_num//=10

digits_sum = 0
cpy_num = number
while cpy_num>0:
    digit = cpy_num%10
    digits_sum += digit**no_of_digits
    cpy_num//=10

if digits_sum == number:
    print("Given number is an Armstrong number.")
else:
    print("Given number is not an Armstrong number.")
    