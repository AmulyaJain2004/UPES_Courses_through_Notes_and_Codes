'''
Check whether the quadratic equation has real roots or imaginary roots. 
Display the roots. 
'''
print ("Enter the coefficients of quadratic equations according to ax^2 + bx + c =0: -")
a = float(input ("Enter the value of a: "))
b = float(input ("Enter the value of b: "))
c = float(input ("Enter the value of c: "))
d = (b**2)-(4*a*c)
if (d>0):
    print("Roots will exist and are real and distinct")
    x = (-b + d)/(2*a)
    y = (-b - d)/(2*a)
    print("Hence, Roots are: %d %d",x,y)
elif (d<0):
    print("Real roots will not exist and complex roots exist")
else:
    print("Roots will exist and are real and equal")
    x = (-b)/(2*a)
    print("Hence, Equal roots are: %d %d",x,x)
  
