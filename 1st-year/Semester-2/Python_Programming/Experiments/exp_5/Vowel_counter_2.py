string = input("Enter the String to count the number of vowels: ")
count_vowel = 0
count_consonant = 0
for i in string:
    if (i=='a' or i=='A' or i=='e' or i=='E' or i=='i' or i=='I' or i=='o' or i=='O' or i=='u' or i=='U'):
        count_vowel +=1
    else: 
        count_consonant +=1

print(count_vowel)
print(count_consonant)
