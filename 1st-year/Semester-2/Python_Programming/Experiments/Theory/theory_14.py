def main():
  tup = (1,2,3,4,5)
  list1 = ['a','b','c','d','e']
  print(list((zip(tup,list1))))
  return 0

if __name__ == "__main__":
  main()