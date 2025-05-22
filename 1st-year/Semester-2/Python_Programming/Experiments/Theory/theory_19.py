class Counter:
    def __init__ (self):
        self.value = 0 
    
    def increment (self):
        self.value += 1
        
class CustomCounter  (Counter):
    def __init__ (self, size):
        Counter.__init__(self)
        self.stepsize = size
        
    def increment(self):
        self.value += self.stepsize
        
    def print_current(self):
        print(f"Current value is {self.value}")

cc = CustomCounter(4)
cc.increment()
cc.print_current()
        