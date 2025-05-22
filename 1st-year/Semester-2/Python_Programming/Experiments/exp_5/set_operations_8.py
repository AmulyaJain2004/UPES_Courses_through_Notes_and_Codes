S1 = {"Red ","yellow", "orange" , "blue" } 
S2 = {"violet", "blue" , "purple"} 

print(S1.union(S2))
print(S1.intersection(S2))
print(S1.difference(S2))
S1.intersection_update(S2)
print(S1)
S1.difference_update(S2)
print(S2)