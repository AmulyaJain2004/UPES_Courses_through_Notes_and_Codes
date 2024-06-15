'''
Write a program to find area of triangle when length of sides are given. 
'''
side_1 = int(input('Enter the value of side 1 of triangle: '))
side_2 = int(input('Enter the value of side 2 of triangle: '))
side_3 = int(input('Enter the value of side 3 of triangle: '))

semi_perimeter = (side_1 + side_2 + side_3)/2.0
area = (semi_perimeter*(semi_perimeter - side_1)*(semi_perimeter - side_2)*(semi_perimeter - side_3))**(0.5)

print(f"Area of Triangle using sides:{area}")
