# #write a program to extract year, month, date and time
# #output 
from datetime import datetime as dt

Date_Time_tell = lambda : dt.today()

def main():
    choice = int(input("Enter 1 if you want to see the date and time otherwise Enter 0: "))
    if choice == 1:
        today_date_time = Date_Time_tell()
        print(today_date_time)
        
    else:
        print("Terminating")
        return 0
    return 0

if __name__ == "__main__":
    main()


