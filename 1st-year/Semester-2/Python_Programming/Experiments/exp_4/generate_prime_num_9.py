# def checkPrime (num):
#     if (num<=1):
#         return 0
    
#     for i in range(2,num+1):
#         if num%i==0:
#             return 0
#     return 1

# print("The prime numbers from 1 to 100 are: -")
# i=2
# while i<=100:
#     if checkPrime(i):
#         print(i, end=" ")
#     i+=1        

def checkPrime(num):
    if num <= 1:
        return False

    for i in range(2, num):
        if num % i == 0:
            return False
    return True

print("The prime numbers from 1 to 100 are: -")
i = 2
while i <= 100:
    if checkPrime(i):
        print(i, end=" ")
    i += 1
