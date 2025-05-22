len_set = int(input("Enter the length of sets: "))

# Using set comprehension to directly create the sets
fruits_set1 = {input("Enter fruits for set1: ") for _ in range(len_set)}
fruits_set2 = {input("Enter fruits for set2: ") for _ in range(len_set)}

common_fruits = fruits_set1.intersection(fruits_set2)
print(f"Fruits which are in both sets are: {common_fruits}")

uniq_fruit_set1 = fruits_set1.difference(fruits_set2)
print(f"Fruits which are in set1 but not in set2 are: {uniq_fruit_set1}")

union_set = fruits_set1.union(fruits_set2)
print(f"Total number of unique fruits in both sets is: {len(union_set)}")
