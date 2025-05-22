print("The numbers which are divisible by 5 and 7 between 1 to 100 are: -")
count = 0
for i in range(1,101):
    if i%5==0 and i%7==0:
        print(i, end=" ")
        count+=1
print()
print("And the count of all such numbers is:", count)

