string = input("Enter the string to search and count the frequency of user demand substring: -\n")
substring = input("Enter the substring to be searched: -\n")

countsubstring = 0
for i in range(len(string)):
    if string[i:i+len(substring)] == substring:
        countsubstring+=1    

print(f"The number of substring present in string {countsubstring}")