# (1)
# with open("practice.txt","w") as f:
#     f.write("Hii everyone \nwe are learning file I/O")
#     f.write("\nusing javascript \nI like programming in javascript")


# (2)
# with open("practice.txt","r") as f:
#     data = f.read()
# # replaces the data
# new_data = data.replace("javascript","python")
# print(new_data)
# # write the new data back to the file
# with open("practice.txt","w") as f:
#     f.write(new_data)


# (3)
# word = "learning"
# with open("practice.txt","r") as f:
#     data = f.read()
#     if(word in data):
#         print("found")
#     else:
#         print("not found")



# (4)
# def check_line_num():
#     word = "learning"
#     data = True
#     line_no = 1
#     with open("practice.txt","r") as f:
#         while data:
#             data = f.readlines()
#             if(word in data):
#                 print(line_no)
#                 return
#             line_no += 1
#     return -1
# check_line_num()   



# (5)
# import os
# files_in_directory = os.listdir()

# if 'example.txt' in files_in_directory:
#     print("File exists.")
# else:  
#     print("File does not exist.")



# (6)
with open("demo.txt", "r") as file:
    content = file.read()

    words = content.split()
    word_count = len(words)

    print("Number of words:", word_count)



# (7)
# with open("source.txt", "r") as source_file:
#     with open("destination.txt", "w") as destination_file:
#         content = source_file.read()
#         destination_file.write(content)

# print("content of source.txt has been copied to destination.file")



# (8)
# with open("source.txt", "r") as file:
#     content = file.read()
#     words = content.split()

#     longest_word = ""
#     max_length = 0

#     for word in words:
#         if len(word) > max_length:
#             longest_word = word
#             max_length = len(word)
#     print("Longest word is", longest_word)



# (9)
# with open("file1.txt", "r") as file1, open("file2.txt", "r") as file2:
#     file1_content = file1.read()
#     file2.content = file2.read()

# with open("file3.txt", "w") as merged_file:
#     merged_file.write(file1_content)
#     merged_file.write("\n")
#     merged_file.write(file2.content)

# print("Files merged successfully into 'file3.txt'")



# (10)
# with open("demo.txt", "r") as file:
#     content = file.read()

# new_content = content.replace("Python", "Java")

# with open("demo.txt", "w") as file:
#     file.write(new_content)

# print("All occurrences of 'Python' replaced with 'Java'.")
# print("id = rafeelle9797")
# print("pass = Galaev06")