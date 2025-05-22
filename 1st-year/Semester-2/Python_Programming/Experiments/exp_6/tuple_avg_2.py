def main ():
    size = int(input("Enter the size of tuple: "))
    num_tuple = ()
    sum = 0
    
    for i in range(size):
        element = int(input("Enter the element in the tuple: "))
        num_tuple += (element, )
        sum += element

    print(f"The average of tuple: {num_tuple} is {sum/size}")
        
    
if __name__ == "__main__":
    main()