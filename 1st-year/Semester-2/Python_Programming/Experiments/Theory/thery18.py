
file = open("File1.txt","a");
print("position of file pointer before reading is: ",file.tell())
print(file.read(10))
print("position of file pointer after reading is: ",file.tell())
print("Setting 3 bytes from the current position of file pointer")
file.seek(3,1)
print(file.read())
file.close()