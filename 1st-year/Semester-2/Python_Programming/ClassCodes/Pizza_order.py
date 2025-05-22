print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ WELCOME TO PIZZA CLUB ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
print()

vpiz_choice = 0
npiz_choice = 0
bill = 0

print("######## Our Menu ########")
choice = input("Enter which type of Pizza you want: Type \"v\" for Vegetarian | Type \"n\" for Non Vegetarian: ")
if choice == "v" or choice == "V":
    print("""1. Margherita Pizza
2. Veg Delight Pizza
3. Veggies Feast Pizza
4. Spicy Paneer Pizza
5. Exotica Pizza
          """)
    vpiz_choice = int(input("Enter your choice of Veg Pizza (1-5): "))
    
    
    
elif choice == "n" or choice == "N":
    print("""1. Chicken Makhni Pizza
2. Chicken Keema Pizza
3. Pesto Rosemary Potato Pizza
4. Carbonara Pizza
5. Chicken, Cheese and Mushroom Pizza
          """)
    npiz_choice = int(input("Enter your choice of Veg Pizza (1-5): "))
    
if vpiz_choice == 1:
    print(f"You choose {vpiz_choice}. Margherita Pizza")
    sizeofpizza =input("""Choose size: Type \"s\" for small which is for 80 Rupees
Type \"m\" for medium which is for 180 Rupees
Type \"l\" for large which is for 280 Rupees
                       """)
    if sizeofpizza == "s":
        bill += 80
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
            

    elif sizeofpizza == "m":
        bill += 180
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
            
        
    elif sizeofpizza == "l":
        bill += 280
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
            
            
            
elif vpiz_choice == 2:
    print(f"You choose {vpiz_choice}. Veg Delight Pizza")
    sizeofpizza =input("""Choose size: Type \"s\" for small which is for 120 Rupees
Type \"m\" for medium which is for 220 Rupees
Type \"l\" for large which is for 320 Rupees
                       """)
    if sizeofpizza == "s":
        bill += 120
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
            

    elif sizeofpizza == "m":
        bill += 220
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
            
        
    elif sizeofpizza == "l":
        bill += 320
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
    
elif vpiz_choice == 3:
    print(f"You choose {vpiz_choice}. Veggies Feast Pizza")
    sizeofpizza =input("""Choose size: Type \"s\" for small which is for 120 Rupees
Type \"m\" for medium which is for 220 Rupees
Type \"l\" for large which is for 320 Rupees
                       """)
    if sizeofpizza == "s":
        bill += 120
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
            

    elif sizeofpizza == "m":
        bill += 220
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
            
        
    elif sizeofpizza == "l":
        bill += 320
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
            
            
elif vpiz_choice == 4:
    print(f"You choose {vpiz_choice}. Spicy Paneer Pizza")
    sizeofpizza =input("""Choose size: Type \"s\" for small which is for 220 Rupees
Type \"m\" for medium which is for 320 Rupees
Type \"l\" for large which is for 420 Rupees
                       """)
    if sizeofpizza == "s":
        bill += 220
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
            

    elif sizeofpizza == "m":
        bill += 320
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
            
        
    elif sizeofpizza == "l":
        bill += 420
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
            
elif vpiz_choice == 5:
    print(f"You choose {vpiz_choice}. Exotica Pizza")
    sizeofpizza =input("""Choose size: Type \"s\" for small which is for 220 Rupees
Type \"m\" for medium which is for 320 Rupees
Type \"l\" for large which is for 420 Rupees
                       """)
    if sizeofpizza == "s":
        bill += 220
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
            

    elif sizeofpizza == "m":
        bill += 320
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
            
        
    elif sizeofpizza == "l":
        bill += 420
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
    
elif npiz_choice == 1:
    print(f"You choose {npiz_choice}. Chicken Makhni Pizza")
    sizeofpizza =input("""Choose size: Type \"s\" for small which is for 120 Rupees
Type \"m\" for medium which is for 220 Rupees
Type \"l\" for large which is for 320 Rupees
                       """)
    if sizeofpizza == "s":
        bill += 120
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
Type \"t\" for Meat which is for 60 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
        elif toppings == "t":
            bill += 60
            print(f"Your bill is {bill} Rupees")
            

    elif sizeofpizza == "m":
        bill += 220
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
Type \"t\" for Meat which is for 60 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
        elif toppings == "t":
            bill += 60
            print(f"Your bill is {bill} Rupees")
            
        
    elif sizeofpizza == "l":
        bill += 320
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
Type \"t\" for Meat which is for 60 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
        elif toppings == "t":
            bill += 60
            print(f"Your bill is {bill} Rupees")
            
elif npiz_choice == 2:
    print(f"You choose {npiz_choice}. Chicken Keema Pizza")
    sizeofpizza =input("""Choose size: Type \"s\" for small which is for 150 Rupees
Type \"m\" for medium which is for 250 Rupees
Type \"l\" for large which is for 350 Rupees
                       """)
    if sizeofpizza == "s":
        bill += 150
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
Type \"t\" for Meat which is for 60 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
        elif toppings == "t":
            bill += 60
            print(f"Your bill is {bill} Rupees")
            

    elif sizeofpizza == "m":
        bill += 250
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
Type \"t\" for Meat which is for 60 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
        elif toppings == "t":
            bill += 60
            print(f"Your bill is {bill} Rupees")
            
        
    elif sizeofpizza == "l":
        bill += 350
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
Type \"t\" for Meat which is for 60 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
        elif toppings == "t":
            bill += 60
            print(f"Your bill is {bill} Rupees")
            
            
elif npiz_choice == 3:
    print(f"You choose {npiz_choice}. Pesto Rosemary Potato Pizza")
    sizeofpizza =input("""Choose size: Type \"s\" for small which is for 150 Rupees
Type \"m\" for medium which is for 250 Rupees
Type \"l\" for large which is for 350 Rupees
                       """)
    if sizeofpizza == "s":
        bill += 150
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
Type \"t\" for Meat which is for 60 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
        elif toppings == "t":
            bill += 60
            print(f"Your bill is {bill} Rupees")
            

    elif sizeofpizza == "m":
        bill += 250
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
Type \"t\" for Meat which is for 60 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
        elif toppings == "t":
            bill += 60
            print(f"Your bill is {bill} Rupees")
            
        
    elif sizeofpizza == "l":
        bill += 350
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
Type \"t\" for Meat which is for 60 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
        elif toppings == "t":
            bill += 60
            print(f"Your bill is {bill} Rupees")
    
    
elif npiz_choice == 4:
    print(f"You choose {npiz_choice}. Carbonara Pizza")
    print(f"You choose {npiz_choice}. Chicken Makhni Pizza")
    sizeofpizza =input("""Choose size: Type \"s\" for small which is for 120 Rupees
Type \"m\" for medium which is for 220 Rupees
Type \"l\" for large which is for 320 Rupees
                       """)
    if sizeofpizza == "s":
        bill += 120
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
Type \"t\" for Meat which is for 60 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
        elif toppings == "t":
            bill += 60
            print(f"Your bill is {bill} Rupees")
            

    elif sizeofpizza == "m":
        bill += 220
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
Type \"t\" for Meat which is for 60 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
        elif toppings == "t":
            bill += 60
            print(f"Your bill is {bill} Rupees")
            
        
    elif sizeofpizza == "l":
        bill += 320
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
Type \"t\" for Meat which is for 60 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
        elif toppings == "t":
            bill += 60
            print(f"Your bill is {bill} Rupees")
    
elif npiz_choice == 5:
    print(f"You choose {npiz_choice}. Chicken, Cheese and Mushroom Pizza")
    sizeofpizza =input("""Choose size: Type \"s\" for small which is for 250 Rupees
Type \"m\" for medium which is for 350 Rupees
Type \"l\" for large which is for 450 Rupees
                       """)
    if sizeofpizza == "s":
        bill += 250
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
Type \"t\" for Meat which is for 60 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
        elif toppings == "t":
            bill += 60
            print(f"Your bill is {bill} Rupees")
            

    elif sizeofpizza == "m":
        bill += 350
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
Type \"t\" for Meat which is for 60 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
        elif toppings == "t":
            bill += 60
            print(f"Your bill is {bill} Rupees")
            
        
    elif sizeofpizza == "l":
        bill += 450
        toppings = input ("""Enter additional topings which you want: Type \"p\" for Pepporoni which is for 40 Rupees
Type \"c\" for Cheese which is for 50 Rupees
Type \"o\" for Oregano which is for 30 Rupees
Type \"t\" for Meat which is for 60 Rupees
                          """)
        if toppings == "p":
            bill += 40
            print(f"Your bill is {bill} Rupees")
        elif toppings == "c":
            bill += 50
            print(f"Your bill is {bill} Rupees")
        elif toppings == "o":
            bill += 30
            print(f"Your bill is {bill} Rupees")
        elif toppings == "t":
            bill += 60
            print(f"Your bill is {bill} Rupees")
    
else:
    print(f"Please Enter valid choice") 
    
    



