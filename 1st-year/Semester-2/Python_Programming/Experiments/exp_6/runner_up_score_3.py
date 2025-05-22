def main():
    size = int(input("Enter the size of list: "))
    score_list = []
    for i in range(size):
        element = int (input("Enter the element: "))
        score_list.append(element)
    score_list.sort()
    second_high = 0
    for i in range(size-1):
        if score_list[i+1] > score_list[i]:
            second_high = score_list[i]
    print("The second highest score: ",second_high)
    
if __name__ == "__main__":
    main()