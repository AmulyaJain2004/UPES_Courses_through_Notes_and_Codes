def main():
    number = int(input("Enter the number to print all natural numbers from 1 to this number: "))
    natural_num_print(number)
    return 0

def natural_num_print(num):
    if num == 0:
        return 0
    print(num, end=" ")
    return natural_num_print(num-1)

if __name__ == "__main__":
    main()