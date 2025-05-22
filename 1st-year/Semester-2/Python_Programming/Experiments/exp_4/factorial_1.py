number = int(input("Enter positive integer whose factorial has to be calculated: "))
i=1
fact = 1
while i<=number:
    fact = fact * i
    i+=1
    
print(f"Factorial of the {number} is {fact}")