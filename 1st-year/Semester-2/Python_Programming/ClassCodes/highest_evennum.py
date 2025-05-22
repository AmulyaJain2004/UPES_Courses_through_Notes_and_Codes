n = int(input("Enter the size of list: "))
num_list = []
for i in range(n):
    element = int(input("Enter the element: "))
    num_list.append(i)
    
even_num = []
for i in num_list:
    if i%2==0:
        even_num.append(i)
print(even_num)

print("Highest even number in the list is: ", max(even_num))