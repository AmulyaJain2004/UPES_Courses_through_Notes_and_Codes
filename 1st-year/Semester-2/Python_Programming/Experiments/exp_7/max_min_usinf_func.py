def main():
    size = int(input("Enter the size of list: -\n"))
    num_list = []
    
    for i in range(0,size):
        element = int(input("Enter the number: -\n"))
        num_list.append(element)
    
    maximum = Max_of_list(num_list)   
    minimum = Min_of_list(num_list) 
    print(f"The maximum and minimum of the list: {num_list} is {maximum} and {minimum} respectively.")
    
def Max_of_list(list_num):
    max = list_num[0]
    for i in range(len(list_num)):
        if max < list_num[i]:
            max = list_num[i]
    return max

def Min_of_list(list_num):
    min = list_num[0]
    for i in range(len(list_num)):
        if min > list_num[i]:
            min = list_num[i]
    return min

if __name__ == "__main__":
    main()