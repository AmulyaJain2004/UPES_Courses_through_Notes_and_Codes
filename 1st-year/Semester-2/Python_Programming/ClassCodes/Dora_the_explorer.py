# 6 : means rightward
# 4 : means leftward
# 2 : means backward
# 8 : means forward

print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Welcome to Treasure Island !! ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

name = input("Enter your name:            ")

print("Hey",name,",The Rules of the game are as follows: -")
print("You have been travelling around the world in search of treasures.")
print("Upon Researching and exploring, you got to know about this strange unknown island, which was supposed to be abandoned.")
print("Your mission is to find the treasure on this island.") 

print('''
*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""     `"=.|                  |
|___________________|__"=._o`"-._        `"=.______________|___________________
          |                `"=._o`"=._      _`"=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
          |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
 _________|___________| ;`-.o`"=._; ." ` '`."\` . "-._ /_______________|_______
|                   | |o;    `"-.o`"=._``  '` " ,__.--o;   |
|___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________ 
____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/_____ /
*******************************************************************************
''')
def divergence():
    print ("You are on a divergence, Choose where you want to go: - ")
    d_choice = int(input("Enter the choice to go in which direction: ") ) 
    if (d_choice == 4):
        print("Going Leftwards")
        return 4
    elif (d_choice == 6):
        print("Going Rightwards")
        return 6
    
    
    
# choice = int(input("Enter the choice to go in which direction: "))
# if (choice==1):
#     print("Going Forward")
#     choice = int(divergence())
#     if (choice==)
    