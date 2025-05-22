with open("D:/mycodes1_4_24/Python/Python_Programming/exp_8/city.txt", "r") as file:
    city = {}
    while(True):
        line = file.readline().strip()
        if not line:   
            break
        line_parts = line.split()
        city_name = line_parts[0]
        population = line_parts[1]
        area = line_parts[2]
        city[city_name] = [population, area]
    
    print(city)
        
    for key, val in city.items():
        if  float(val[0]) > 10:
            print(f"{key} : {val}")
    
    area_sum = 0        
    for val in city.values():
        area_sum += float(val[1])
        
    print("\nTotal Area of all Cities is ", area_sum)