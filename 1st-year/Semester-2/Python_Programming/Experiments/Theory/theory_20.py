import numpy as np

# Creating a NumPy array 
my_array = np.array([1, 2, 3, 4, 5]) 
print("Array:", my_array) 
# Performing operations on arrays 
print("Sum:", np.sum(my_array)) 
print("Mean:", np.mean(my_array)) 
print("Standard Deviation:", np.std(my_array)) 
# Creating a 2D array 
my_2d_array = np.array([[1, 2, 3], [4, 5, 6]]) 
print("2D Array:\n", my_2d_array) 
# Matrix multiplication 
matrix_a = np.array([[1, 2], [3, 4]]) 
matrix_b = np.array([[5, 6], [7, 8]]) 
result = np.dot(matrix_a, matrix_b) 
print("Matrix Multiplication:\n", result)