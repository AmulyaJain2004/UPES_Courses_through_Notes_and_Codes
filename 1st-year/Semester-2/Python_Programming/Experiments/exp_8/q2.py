with open("D:/mycodes1_4_24/Python/Python_Programming/exp_8/integer.txt", "r") as file:

    num = (file.read()).split(',')
    num = [int(x) for x in num]
    print(num)
    
    avg  = sum(num)/len(num)
    print (avg)
    
    count = 0
    for i in range(len(num)):
        if num[i] > 100:
            print(num[i])
            count +=1
    print(count)
    
    numbers = max(num)
    print(numbers)
    