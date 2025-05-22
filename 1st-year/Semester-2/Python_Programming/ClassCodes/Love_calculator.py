# # import getpass

# print("~~~~~~~~~~~~~~~~~~~~~ Mohabbat ka Parikalak ~~~~~~~~~~~~~~~~~~~~~~")
# print("DISCLAIMER --- Just a Fun Game")

# Person_1 = input("Enter the name of Person 1: ").lower()
# Person_2 = input("Enter the name of Person 2: ").lower()

# # choice1 = getpass.getpass("for Person_1, Do you like the Person_2? : type 3 for yes | type -2 for no | type 0 for not sure, or as a friend: ")
# # choice2 = getpass.getpass("for Person_2, Do you like the Person_1? : type 3 for yes | type -2 for no | type 0 for not sure, or as a friend: ")  

# list1 = list(Person_1)
# list2 = list(Person_2)
# list_concat =  list1 + list2

# t=0
# r=0
# u=0
# e=0
# l=0
# o=0
# v=0
# e=0

# t=list_concat.count("t")
# r=list_concat.count("r")
# u=list_concat.count("u")
# e=list_concat.count("e")
# l=list_concat.count("l")
# o=list_concat.count("o")
# v=list_concat.count("v")

# # # choice = int(choice1) + int(choice2)

# number = (((t+r+u+e+l+o+v))/len(list_concat))*100
# if (round(number,1) <40) :
#     print(f"Love percentage is: {round(number,1)}%. Naam change kar!!")
# elif (round(number,1) >=40) and (round(number,1) <=60):
#     print(f"Love percentage is: {round(number,1)}%. Good to go!!")
# else:
#     print(f"Love percentage is: {round(number,1)}%. Congratulations, Mithai baato!!")  
    

# def calculate_love_score(name1, name2):
#     combined_names = (name1 + name2).lower()
#     score = 0
    
#     for char in combined_names:
#         score += ord(char)
    
#     love_score = score % 101
#     return love_score

# name1 = input("Enter the first name: ")
# name2 = input("Enter the second name: ")

# result = calculate_love_score(name1, name2)
# print(f"The love score between {name1} and {name2} is: {result}%")

# import random

# def calculate_love_score(name1, name2):
#     combined_names = (name1 + name2).lower()
#     score = sum(ord(char) for char in combined_names)
    
#     random.seed(score)  # Set a seed for consistency in results
#     love_score = random.randint(0, 100)  # Generate a random love score
    
#     return love_score

# name1 = input("Enter the first name: ")
# name2 = input("Enter the second name: ")

# result = calculate_love_score(name1, name2)
# print(f"The love score between {name1} and {name2} is: {result}% 💖✨")


def calculate_love_score(name1, name2):
    zodiac_signs = {
        "aries": 21, "taurus": 22, "gemini": 23, "cancer": 24,
        "leo": 25, "virgo": 26, "libra": 27, "scorpio": 28,
        "sagittarius": 29, "capricorn": 30, "aquarius": 31, "pisces": 32
    }
    
    combined_names = (name1 + name2).lower()
    zodiac_score = sum(zodiac_signs.get(sign, 0) for sign in combined_names.split())
    
    score = sum(ord(char) for char in combined_names) + zodiac_score
    
    love_score = (score * 2) % 101  # Complicated algorithm for love score
    
    return love_score

name1 = input("Enter the first name: ")
name2 = input("Enter the second name: ")

result = calculate_love_score(name1, name2)
print(f"The love score between {name1} and {name2} is: {result}% 💖🔮✨")
