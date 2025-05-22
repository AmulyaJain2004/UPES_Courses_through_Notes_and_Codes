class Employee:
    
    record = {}
    
    def __init__(self, name, age, salary, gender, record={}):
        self.name = name
        self.age = age 
        self.salary = salary
        self.gender = gender
        self.record = record
        
    def employ_record (self,record, name, age , salary, gender):
        self.record = record
        self.name = name
        self.age = age 
        self.salary = salary
        self.gender = gender
        
        
    
        
        

# sajal = Employee()
# # print(sajal.company)
# # Employee.company = "UPES"
# # print(sajal.company)

# sajal.age = 28
# sajal.salary = '60K'

# sajal.name = "Sajal"
