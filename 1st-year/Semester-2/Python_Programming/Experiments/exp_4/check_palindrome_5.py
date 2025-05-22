number = int(input("Enter the number to check whether it is Palindrome number or not: "))

rev_num = 0
cpy_num = number
while cpy_num>0:
    digit = cpy_num%10
    rev_num = rev_num*10 + digit
    cpy_num//=10

if rev_num == number:
    print("Given number is Palindrome number")
else:
    print("Given number is not Palindrome number")