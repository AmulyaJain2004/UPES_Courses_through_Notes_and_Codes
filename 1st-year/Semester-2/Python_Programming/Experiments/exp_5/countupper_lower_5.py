string = input("Enter a string to count number of uppercase and lowercase letters present in string: \n").upper()
unique_string = set(string)
for i in unique_string:
    count = 0
    for j in string:
        if i == j:
            count+=1
    print(f"{i} = {count}")