MyList = [1,2,3,4,5,6,7,8,9]
print("Original list:",MyList)
MyList[3]=7
print("Example to present mutability\n", MyList)

# MyTuple = (1,2,3,4,5,6,7,8,9)
# print("Original list:",MyTuple)
# MyTuple[3]=7
# print("Example to present mutability\n", MyTuple)

MyList.append(10)
print(MyList)

list1 = [1,2,4,5]
list2 = [3,5,6,7]

list1.extend(list2)
print(list1)

list2.append(list1)
list2.append(list2)#r&d about it
print(list2)

list1.remove(2)
print(list1)

