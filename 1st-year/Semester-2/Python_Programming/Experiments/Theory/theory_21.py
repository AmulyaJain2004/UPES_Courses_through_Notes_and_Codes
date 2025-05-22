import numpy as np
# arr = np.array([[[2,3,4],[5,6,7],[1,8,9]]])
# print(arr.ndim)
# x = np.array([1,2,3])
# y = np.zeros((2,3,4))
# print(x.ndim)
# print(y.ndim)
# print(x)
# print(y)

# arr = np.array([1,2,3,4,5])
# reshaped_arr = arr.reshape(2,3)
# print(reshaped_arr)

arr1_2d = np.array([[1,2,3],[4,5,6],[7,8,9]])
arr2_2d = np.array([[9,8,7],[6,5,4],[3,2,1]])

arr3d = np.array([arr1_2d,arr2_2d])
print(arr3d)