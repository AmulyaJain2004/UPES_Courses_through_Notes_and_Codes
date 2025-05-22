import numpy as np

arr2d =  np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
sum_arr_row = np.sum(arr2d, axis=0) # sum of each row
print("Sum of rows: ", sum_arr_row)

sum_arr_col = np.sum(arr2d, axis=1) # sum of each column
print("\nSum of columns: ", sum_arr_col)