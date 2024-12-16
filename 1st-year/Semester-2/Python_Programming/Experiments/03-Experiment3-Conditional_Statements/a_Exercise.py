'''
Check whether given number is divisible by 3 and 5 both. 
'''
number = int(input("Enter the number to check its divisibility by 3 & 5: "))
if (number%3==0 and number%5==0):
    print("Number is divisible by both 3 and 5.")
else:
    print("Number is not divisible by both 3 and 5.")
