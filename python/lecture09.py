
# To delete a class
# class student:
#     def __init__(self,name):
#         self.name = name

# s1 = student("santosh")
# print(s1)
# del s1
# print(s1)



# To make any attribute of methods private 
# class Account:
#     def __init__(self,acc_no):
#         # here we use(__in front of attribute to make it private)
#         self.__acc_no = acc_no

# acc_details = Account("123")

# print(acc_details.acc_no)



# why we use private methods 
# we use private methods to make sure that they are used only inside the class

# class Person:
#     __name = "anonymous"

#     def __hello(self):
#         print("hello person")

#     def welcome(self):
#         self.__hello()

# p1 = Person()
# print(p1.welcome())



# Inheritance
# Example of Inheritance

# class Car:
#     color = "white"
#     @staticmethod
#     def start():
#         print("car is started...")

#     @staticmethod
#     def stop():
#         print("car is stopped.")

# class Toyotacar(Car):
#     def __init__(self,name):
#         self.name = name

# car01 = Toyotacar("fortuner")        
# car02 = Toyotacar("prius")

# car01.start()
# car01.stop()
# car02.start()
# car02.stop()

# print(car01.color)



# Types of inheritance
# (1)Single Inheritance
# class Car:
#     color = "white"
#     @staticmethod
#     def start():
#         print("car is started...")

#     @staticmethod
#     def stop():
#         print("car is stopped.")

# class mercedes(Car):
#     def __init__(self,name):
#         self.name = name

# car01 = mercedes("G wagon")
# print(car01.name)
# car01.start()
# car01.stop()

# (1)Single Inheritance
class Car:
    @staticmethod
    def start():
        print("car is started...")

    @staticmethod
    def stop():
        print("car is stopped.")

class mercedes(Car):
    def __init__(self,brand):
        self.brand = brand

class BMW(mercedes):
    def __init__(self, type):
        self.type = type

car01 = BMW("electric")
car01.start()
print(car01.brand)