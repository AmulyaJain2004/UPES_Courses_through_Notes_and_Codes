# num_list = [6,3,7,0,1,2,4,9]
# # print(num_list.pop())
# # print(num_list)
# num_list.sort()
# print(num_list)


# first unique word index

def first_non_repeating_char_index (string): 
    check_str = string.upper()
    for i in range(len(string)):
        if check_str.count(check_str[i]) == 1:
            print("Unique character is:",string[i],"and its index is",i)
    return

string = input("Enter the string to find the first non repeating character: \n")
first_non_repeating_char_index(string)



    
