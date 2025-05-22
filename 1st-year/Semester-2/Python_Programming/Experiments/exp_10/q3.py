import numpy as np

arr1_2d = np.array([[1,2,3],[4,5,6],[7,8,9]])
arr2_2d = np.array([[9,8,7],[6,5,4],[3,2,1]])



arr_product = np.dot(arr1_2d, arr2_2d)
print(arr_product)

arr_element_wise_product = np.multiply(arr1_2d, arr2_2d)
print(arr_element_wise_product)



