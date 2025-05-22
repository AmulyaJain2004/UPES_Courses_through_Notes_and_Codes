number = int(input("Enter the number to check whether it is Prime number or not: "))
count_of_factors = 0
for i in range(1,number+1):
    if number%i==0:
        count_of_factors+=1

if count_of_factors == 2:
    print("Given number is prime number")
else:
    print("Given number is not prime number")