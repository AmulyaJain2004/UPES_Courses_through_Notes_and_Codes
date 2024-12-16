'''
Write a program to convert given seconds into hours, minutes and remaining 
seconds. 
'''
seconds = int(input('Enter the value of seconds: '))

minute = seconds//60
remaining_minute = minute%60
remaining_sec = seconds%60 
hours = minute//60

print(f"Time is: {hours} : {remaining_minute} : {remaining_sec}")
