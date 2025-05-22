def main():
    limit = int(input("Enter the number upto fibonacci series has to be found -\n"))
    start1 = int(input("Enter the starting term: \n"))
    start2 = int(input("Enter the next term after starting: \n"))
    
    print(start1, end =" ")
    fibonacci_series(start1, start2, limit)
    return 0

def fibonacci_series(initial,next,end):
    if next >= end:
        return 0
    print(next, end=" ")
    return fibonacci_series(next, initial + next, end)


if __name__ == "__main__":
    main()