'''
class Student:
    
    marks = []
    def __init__ (self, name, sapid, phy, chem, maths, records={}):
        self.name = name
        self.sapid = sapid
        self.phy = phy
        self.chem = chem
        self.maths = maths
        self.records = records
        
    def stu_record (self, name, sapid, phy, chem, maths):
        marks = [phy, chem, maths]
        self.records[sapid] =[name, marks]
        return
        
    def display_all(self):
        for i in self.records:
            print(i)
        return
    
    
def main():
    Batch30 = Student()
    
    for i in range(int(input("Enter the number of students you want to enter: "))):
        name = input("Enter the name: ")
        sapid = input("Enter the sapid: ")
        phy = input("Enter the physics marks: ")
        chem = input("Enter the chemistry marks: ")
        maths = input("Enter the maths marks: ")
        
        Batch30.stu_record(name, sapid, phy, chem, maths)
        Batch30.display_all()
    
if __name__ == "__main__":
    main()
    
'''

class Student:
    
    def __init__(self):
        self.records = {}
        
    def add_student(self, name, sapid, phy, chem, maths):
        marks = [phy, chem, maths]
        self.records[sapid] = [name, marks]
        
    def display_all(self):
        for sapid, details in self.records.items():
            name, marks = details
            print(f"Name: {name}, SAP ID: {sapid}, Physics: {marks[0]}, Chemistry: {marks[1]}, Maths: {marks[2]}")
    
    
def main():
    Batch30 = Student()
    
    num_students = int(input("Enter the number of students you want to enter: "))
    for i in range(num_students):
        name = input("Enter the name: ")
        sapid = input("Enter the SAP ID: ")
        phy = input("Enter the physics marks: ")
        chem = input("Enter the chemistry marks: ")
        maths = input("Enter the maths marks: ")
        
        Batch30.add_student(name, sapid, phy, chem, maths)
        
    Batch30.display_all()
    
if __name__ == "__main__":
    main()
