def main():
    number = int(input("Enter a positve number: -\n"))
    sum = 0
    for i in range(0,number):
        sum += cube(i)
    print(f"The sum of cubes of all positive number less than {number} = {sum}")
    return 0

def cube(x):
    return x**3

if __name__ == "__main__":
    main()