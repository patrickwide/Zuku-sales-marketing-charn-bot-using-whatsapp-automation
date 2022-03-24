





































# import pandas as pd
# from pandas.core.frame import DataFrame
# set to max row view
# pd.set_option('display.max_rows', None)


 
# # Creating the first Dataframe using dictionary
# df1 = df = pd.DataFrame({"a":["jane", "john", "mike", "paul"],
#                          "b":[5, 6, 7, 8]})
  
# # Creating the Second Dataframe using dictionary
# df2 = pd.DataFrame({"a":["pat", "max", "mary"],
#                     "b":[5, 6, 7]})
# print(df1)

# print(df2)



# new_data = df1.append(df2, ignore_index = True)


# print("---------------------")
# print(new_data)













# data1 = pd.read_csv("y_now.csv")
# df1 = pd.DataFrame(data1)
# df1 = df1[["FIRSTNAME","Contacts","Content"]]

# data2 = pd.read_csv("me.csv")
# df2 = pd.DataFrame(data2)
# df2 = df2[["FIRSTNAME","Contacts","Content"]]


# print(df1)
# print(df2)
# append1 = df2.append(df1, ignore_index=True)

# append2 = append1.append(df2, ignore_index=True)

# print("----------------------------------")
# print(append2.to_csv("y_now.csv"))















# me = pd.DataFrame({"FIRSTNAME":["ADMIN"],
#                    "Contacts":["723116674"],
#                    "Content":[MESSAGE]})
# # df.append(me,ignore_index=True)















# df.to_csv("y_now.csv")
# print("done")






















# df2 = pd.DataFrame({"a":[1, 2, 3],
#                     "b":[5, 6, 7], 
#                     "c":[1, 5, 4]})











# import csv

# file = open("pato.csv", "r")
# csv_reader = csv.reader(file)

# lists_from_csv = []
# for row in csv_reader:

#     lists_from_csv.append(row)
# results = lists_from_csv[1:]


# print(results[0])













# import pandas as pd
# import numpy as np
# data = pd.read_csv("pato.csv")
# df = pd.DataFrame(data)


# # df = df[["Contacts","Content"]]

# result = df.to_numpy()

# print(type(result))



# result =[
#         ['John', 723116674,"word"],
#         ['Tom', 723116674,"word"],
#         ['Mary', 723116674,"word"]
#         ]


# print(type(result))


























# from os import name, times
# from PIL import Image, ImageDraw,ImageFont
# import PIL
# import textwrap



# def make_image(name):
#     name = name.capitalize()
#     imgsize = (564, 801)
#     im = Image.new("RGB",imgsize,color="red")
#     d = ImageDraw.Draw(im,"RGBA")
#     innerColor = [80, 80, 255] #Color at the center
#     outerColor = [0, 0, 80] #Color at the edge


#     for y in range(imgsize[1]):
#         for x in range(imgsize[0]):

#             #Find the distance to the closest edge
#             distanceToEdge = min(abs(x - imgsize[0]), x, abs(y - imgsize[1]), y)

#             #Make it on a scale from 0 to 1
#             distanceToEdge = float(distanceToEdge) / (imgsize[0]/2)

#             #Calculate r, g, and b values
#             r = innerColor[0] * distanceToEdge + outerColor[0] * (1 - distanceToEdge)
#             g = innerColor[1] * distanceToEdge + outerColor[1] * (1 - distanceToEdge)
#             b = innerColor[2] * distanceToEdge + outerColor[2] * (1 - distanceToEdge)

#             #Place the pixel        
#             im.putpixel((x, y), (int(r), int(g), int(b)))



#     rec_c = [(66, 106-15),(498, 695+15)]
#     rec_f = "#FFF"#(239, 86, 0, 127)
#     d.rounded_rectangle(rec_c, fill=rec_f,radius=5)

#     # client name
#     font = ImageFont.truetype("AbrilFatface-Regular.ttf",size=50)
#     d.text((564/2, 170),f"Dear {name}", fill="black", anchor="ms", font=font)

#     # client name
#     font = ImageFont.truetype("Caveat-VariableFont_wght.ttf",size=53)
#     d.text((564/2, 215),"We miss you!", fill="#0a0b65", anchor="ms", font=font)


#     d.line(((90, 250), (200 + 40 , 250)), "#0a0b65",width=2)
#     d.line(((560-200 - 40, 250), (560-90 , 250)), "#0a0b65",width=2)

#     # pay
#     font = ImageFont.truetype("Caveat-VariableFont_wght.ttf",size=43)
#     d.text((564/2, 260),"Pay", fill="#0a0b65", anchor="ms", font=font)

#     # pay
#     font = ImageFont.truetype("AbrilFatface-Regular.ttf",size=220)
#     d.text((564/2 - 60, 801/2 + 60),"50", fill="black", anchor="ms", font=font)
#     #Nosifer-Regular.ttf
#     # pay
#     font = ImageFont.truetype("AbrilFatface-Regular.ttf",size=80)
#     d.text((564/2 + 130, 370.5),"Off\n%", fill="black", anchor="ms", font=font)

#     # To get reconected
#     font = ImageFont.truetype("Caveat-VariableFont_wght.ttf",size=53)
#     d.text((564/2, 530),"To get reconnected", fill="#0a0b65", anchor="ms", font=font)

#     d.line(((90, 570), (560-90 , 570)), "#0a0b65",width=2)


#     # from zuku
#     font = ImageFont.truetype("AbrilFatface-Regular.ttf",size=43)
#     d.text((564/2, 620),"From Zuku", fill="black", anchor="ms", font=font)

#     # my phone number
#     font = ImageFont.truetype("AbrilFatface-Regular.ttf",size=38)
#     d.text((564/2, 675),"Call : 0723116674 ", fill="black", anchor="ms", font=font)

#     # im.save('50%_card_1.png')
#     return im


# # a = make_image(name="jane")
# # a.show()


# result =[
#         ['John', 723116674,"word"],
#         ['Tom', 723116674,"word"],
#         ['Mary', 723116674,"word"]
#         ]

# list_of_images = []  
# for i in result:
#     image = make_image(i[0])
#     print(image)
#     list_of_images.append(image)


# import time
# for i in list_of_images:
#     i.show()
#     time.sleep(0.0)
    










































































# ImageDraw.Draw(new).text((5,5),text_new,font=font,fill=text_color)




#         image_card = [(padding_left + padding_hr,
#                     padding_top + padding_vr),
#                     (padding_right - padding_hr,
#                     padding_bottom - padding_vr)
#                     ]

#         image_card = d.rectangle(image_card, fill ="#fff")

























# from PIL import Image, ImageDraw


# images = []
# width = 200
# center = width // 2
# color_1 = (0,255, 0)
# color_2 = (255, 0, 0)
# max_radius = int(center * 1.5)
# step = 8




# for i in range(0, max_radius, step):
# 	im = Image.new('RGB', (width, width), color_2)
# 	draw = ImageDraw.Draw(im)
# 	draw.ellipse((center - i, center - i,
# 				center + i, center + i),
# 				fill=color_1)
# 	images.append(im)



# images[0].save('pillow_imagedraw.gif',
# 			save_all = True, append_images = images[1:],
# 			optimize = False, duration = 10)


# from PIL import Image, ImageDraw

# images = []

# width = 200
# center = width // 2
# color_1 = (0,255, 0)
# color_2 = (255, 0, 0)
# max_radius = int(center * 1.5)
# step = 8

# for i in range(0, max_radius, step):
# 	im = Image.new('RGB', (width, width), color_2)
# 	draw = ImageDraw.Draw(im)
# 	draw.ellipse((center - i, center - i,
# 				center + i, center + i),
# 				fill = color_1)
# 	images.append(im)

# images[0].save('pillow_imagedraw.gif',
# 			save_all = True, append_images = images[1:],
# 			optimize = False, duration = 10)





















# import pyfiglet
# word = pyfiglet.figlet_format("I  love  you")
# # a = str(word)
# # print(a)
# import emoji
# print("\U0001f600")
# print(emoji.emojize(":grinning_face_with_big_eyes:"))

# print(emoji.emojize(":smiling_face_with_heart-eyes:"))
# print(emoji.emojize(":grinning_face_with_big_eyes:"))
# print("😃")

# print(emoji.emojize(":🚁:"))
# # print(emoji.emojize(":grinning_face_with_big_eyes:"))
# # print(emoji.emojize(":grinning_face_with_big_eyes:"))
# # print(emoji.emojize(":grinning_face_with_big_eyes:"))
# # print(emoji.emojize(":grinning_face_with_big_eyes:"))
# # print(emoji.emojize(":grinning_face_with_big_eyes:"))
# # print(emoji.emojize(":grinning_face_with_big_eyes:"))
# # print(emoji.emojize(":grinning_face_with_big_eyes:"))
# # print(emoji.emojize(":grinning_face_with_big_eyes:"))
# # print(emoji.emojize(":grinning_face_with_big_eyes:"))
# # print(emoji.emojize(":grinning_face_with_big_eyes:"))













# import sys

# a = [1,2,3,4,5,6,7,8,9,10]
# print(a)



# sys.stdout.flush()