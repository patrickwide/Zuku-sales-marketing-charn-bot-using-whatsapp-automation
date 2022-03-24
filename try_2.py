# from PIL import Image, ImageDraw,ImageFont
# import PIL
# import textwrap


# imgsize = (564, 801) #The size of the image

# im = Image.new('RGB', imgsize) #Create the image

# innerColor = [80, 80, 255] #Color at the center
# outerColor = [0, 0, 80] #Color at the edge


# for y in range(imgsize[1]):
#     for x in range(imgsize[0]):

#         #Find the distance to the closest edge
#         distanceToEdge = min(abs(x - imgsize[0]), x, abs(y - imgsize[1]), y)

#         #Make it on a scale from 0 to 1
#         distanceToEdge = float(distanceToEdge) / (imgsize[0]/2)

#         #Calculate r, g, and b values
#         r = innerColor[0] * distanceToEdge + outerColor[0] * (1 - distanceToEdge)
#         g = innerColor[1] * distanceToEdge + outerColor[1] * (1 - distanceToEdge)
#         b = innerColor[2] * distanceToEdge + outerColor[2] * (1 - distanceToEdge)

#         #Place the pixel        
#         im.putpixel((x, y), (int(r), int(g), int(b)))







# im.save('rectgradient.jpg')





























# import math
#  #The size of the image

# image = Image.new('RGB', imgsize) #Create the image

# innerColor = [60, 255, 25] #Color at the center
# outerColor = [0, 0, 80] #Color at the corners


# for y in range(imgsize[1]):
#     for x in range(imgsize[0]):

#         #Find the distance to the center
#         distanceToCenter = math.sqrt((x - imgsize[0]/2) ** 2 + (y - imgsize[1]/2) ** 2)

#         #Make it on a scale from 0 to 1
#         distanceToCenter = float(distanceToCenter) / (math.sqrt(2) * imgsize[0]/2)

#         #Calculate r, g, and b values
#         r = outerColor[0] * distanceToCenter + innerColor[0] * (1 - distanceToCenter)
#         g = outerColor[1] * distanceToCenter + innerColor[1] * (1 - distanceToCenter)
#         b = outerColor[2] * distanceToCenter + innerColor[2] * (1 - distanceToCenter)


#         #Place the pixel        
#         image.putpixel((x, y), (int(r), int(g), int(b)))

# image.save('circlegradient.jpg')











import sys, json

# Function to calculate the sum of array
def arraysum(arr):
	return sum(arr)

# Get the command line arguments
# and parse it to json
data = json.loads(sys.argv[1])

# Get the required field from
# the data
array = data['array']

# Calculate the result
result = arraysum(array)

# Print the data in stringified
# json format so that we can
# easily parse it in Node.js
newdata = {'sum':result}
print(json.dumps(newdata))


















# from subprocess import Popen,PIPE
# from sys import stdout
# #here is the data
# data_1 = "20"
# data_2 = "22"

# # send the data to node try_2.js
# process = Popen(['node','try_2.js',data_1,data_2],stdout=PIPE)

# stdout = process.communicate()[0]

# encoding = 'utf-8'
# print(f"stdout {str(stdout,encoding)}")



# from subprocess import Popen, PIPE
# import json

# # Initialise the data
# array = [2,3,4,5,6,7,8,9]
# data = {'array':array}

# # Stringify the data.
# stingified_data = json.dumps(data)

# # Call the node process and pass the
# # data as command line argument
# process = Popen(['node', 'try_2.js',
# 		stingified_data], stdout=PIPE)

# # This line essentially waits for the
# # node process to complete and then
# # read stdout data
# stdout = process.communicate()[0]

# # The stdout is a bytes string, you can
# # convert it to another encoding but
# # json.loads() supports bytes string
# # so we aren't converting

# # Parse the data into json
# result_data = json.loads(stdout)
# array_sum = result_data['sum']
# print('Sum of array from Node.js process =',array_sum)
























A/c : 880287
name : BENSON WANJOHI
package : 10mbps
package amount : ksh 2799
pay : ksh 1399.5








