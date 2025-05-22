def main():
    n = int(input("Enter the size of dictionary you want to create: "))
    person_dict = {}
    for i in range(n):
        name = input(f"Enter name {i + 1}: ")
        city = input(f"Enter city {i + 1}: ")
        person_dict[name] = city
        
    print("a) Persons are: -")
    for person in person_dict.keys():
        print (person)
        
    print("b) Cities are: -")
    for city in person_dict.values():
        print(city)  

    print("c) Displaying both: -")
    for person,city in person_dict.items():
        print(person,":",city)

    print("d) The number of students in each city are -")
    count_city =0
    city_list = set(person_dict.values())
    for city in city_list:
        count_city = (list(person_dict.values())).count(city)
        print(f"The number of students in {city} is: {count_city}")
        
        
    
            
    
    
    
    
if __name__ == "__main__":
    main()