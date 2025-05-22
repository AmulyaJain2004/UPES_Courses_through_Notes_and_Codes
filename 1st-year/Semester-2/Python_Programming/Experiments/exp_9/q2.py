class Student:
    
    def __init__(self):
        self.records = {}
        
    def add_student(self, name, sapid, phy, chem, maths):
        marks = [int(phy), int(chem), int(maths)]  
        self.records[sapid] = [name, marks]
        
    def display_all(self):
        for sapid, details in self.records.items():
            det = details
            print(f"Name: {det[0]}\t, SAP ID: {sapid}\t, Physics: {det[1][0]}\t, Chemistry: {det[1][1]}\t, Maths: {det[1][2]}\t")
            
    def marks_percentage(self):
        per = {}
        for sapid, details in self.records.items():
            per[sapid] = sum(details[1]) / 3  
        return per
    
    def marks_result(self, per):  # Modify to take 'per' as input
        pass_fail = {}
        for sapid, average_marks in per.items():
            if average_marks > 40:  
                pass_fail[sapid] = 'pass'
            else:
                pass_fail[sapid] = 'fail'
        return pass_fail
    
    
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
    percentages = Batch30.marks_percentage()
    print(percentages)
    results = Batch30.marks_result(percentages)  # Pass percentages to marks_result method
    print(results)
    
    
if __name__ == "__main__":
    main()
