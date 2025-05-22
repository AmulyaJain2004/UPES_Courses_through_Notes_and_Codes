def main ():
    size = int(input("Enter the size of tuple: "))
    num_tuple = ()
    sum = 0
    
    for i in range(size):
        element = int(input("Enter the element in the tuple: "))
        num_tuple += (element, )
        
    range_tuple = Min_Max_tuple(num_tuple)
    print(range_tuple)

Min_Max_tuple = lambda num_tuple : (min(num_tuple),max(num_tuple))

if __name__ == "__main__":
    main()