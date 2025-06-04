# (1)creating class
# class student:
#     name = "santosh yadav"



# (2)creating object (instance)
# s1 = student()
# print(s1.name)



# (3)example
# class car:
#     color = "blue"

# car1 = car()
# print(car1.color)



# (4)__init__ function(constructor)
# class student:
#     college_name = "xyz college"
#     def __init__(self, name, marks):
#         self.name = name
#         self.marks = marks

# s1 = student("santosh", 88)
# print(s1.name , s1.marks, s1.college_name)



# (5)Methods
# class student:
#     college_name = "xyz college"
#     def __init__(self, name, marks):
#         self.name = name
#         self.marks = marks

#     def welcome(self):
#         print("welcome",self.name)

#     def get_marks(self):
#         return self.marks

# s1 = student("santosh", 88)
# s1.welcome()
# print(s1.get_marks())  



# (6)To greet someone using static method
# class greet:
#     @staticmethod
#     def say_hello(name):
#         print(f"hello, {name}!")

# greet.say_hello("samirr")



# Implementation(1st pillar of OOPS)
# class car:
#     def __init__(self):
#         self.acc = False
#         self.brk = False
#         self.clutch = False

#     def start(self):
#         self.acc = True
#         self.brk = True
#         print("Car Stared...")

# car01 = car()
# car01.start() #this is the main part which is only visible to user and other details are hidden



# PRACTICE QUESTION(take 3 subjects and print there average )
# class student:
#     def __init__(self, name, marks):
#         self.name = name
#         self.marks = marks

#     def get_avg(self):
#         sum = 0
#         for val in self.marks:
#             sum += val
#         print("hii,",self.name, "your average marks is",sum/3)

# s1 = student("santosh",[75, 85,63])
# s1.get_avg()