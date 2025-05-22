with open("D:/mycodes1_4_24/Python/Python_Programming/exp_8/abc.txt", "r") as file:
    words = []
    count = 0
    count_vowel_name = 0
    while(True):
        line = file.readline()
        if (line == ""):
            break
        count += 1
        words.append(line)
        if (line[0] == 'a'or 
            line[0] == 'e'or
            line[0] == 'i'or
            line[0] == 'o'or
            line[0] == 'u'or
            line[0] == 'A'or
            line[0] == 'E'or
            line[0] == 'I'or
            line[0] == 'O'or
            line[0] == 'U'):
            count_vowel_name += 1
    print(count)
    print(count_vowel_name)
    
    for i in  words:
        if len(i) == max(words) :
            print("Length of maximum words is: ", max(words))