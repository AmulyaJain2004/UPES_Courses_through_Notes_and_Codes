n = int(input("Enter the numbers of times which you want to scan: "))
num_list = []
for i in range(0,n):
    element = int(input("Enter the value in (0-3): "))
    num_list.append(element)

print()

for i in range(0,3):
    freq = num_list.count(i)
    print(f"frequency of {i} element is {freq}")
