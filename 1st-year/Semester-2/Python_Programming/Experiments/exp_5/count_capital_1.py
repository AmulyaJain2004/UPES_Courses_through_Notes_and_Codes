string = input("Enter a string to count number of capital letters present in string: ")
count_capital = 0
for i in range(0, len(string)):
    if string[i] == string[i].upper():
        count_capital +=1
print(f"Number of capital letters in the string are: {count_capital}")