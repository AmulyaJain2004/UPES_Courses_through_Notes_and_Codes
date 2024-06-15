'''
Write a program to compute the length of the hypotenuse (c) of a right triangle 
using Pythagoras theorem.  
'''
base = float(input('Enter the value of base of right triangle: '))
perpendicular = float(input('Enter the value of perpendicular of right triangle: '))

hypotenuse_sq = base**2 + perpendicular**2
hypotenuse = hypotenuse_sq**(1/2)
print(f"Value of Hypotenuse: {hypotenuse}")
