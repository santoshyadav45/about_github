# (1)To open and read file
# f = open("demo.txt","r")
# data = f.read()
# print(data)
# f.close()

# (2)To get a particular no. of character from start
# f = open("demo.txt","r")
# data = f.read(7)
# print(data)
# f.close()

# (3)To get a full line
# f = open("demo.txt","r")
# read_full_line_01 = f.readline()
# print(read_full_line_01)
# f.close()

# (4)To get a multiple lines
# f = open("demo.txt","r")

# read_full_line_01 = f.readline()
# print(read_full_line_01)
# read_full_line_02 = f.readline()
# print(read_full_line_02)

# f.close()

# # (5)To overwrite an entire file
# f = open("demo.txt","w")
# f.write("This is a new file")
# f.close()

# (6)To add something in a file
# f=open("demo.txt","a")
# f.write("\nThis is a new line")
# f.close()

# (7)To add something from the starting
# f=open("demo.txt","r+")
# f.writelines("hello")
# print(f.read())
# f.close()

# (8)Open and read in file with syntax
# with open("demo.txt","r") as f:
#     data = f.read()
#     print(data)

# (8)Open and write in file with syntax
# with open("demo.txt","a") as f:
#     data = f.write("\nThis line has been added recently")
#     print(data)

# (9)To delete a file
# import os
# os.remove("sample.txt")

