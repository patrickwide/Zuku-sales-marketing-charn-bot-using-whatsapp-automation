import sys, json
import csv

# recive the command as the file name
file_name = json.loads(sys.argv[1])

# try to open the file and process it
try:
    file = open(file_name, "r")

    # read the file 
    csv_reader = csv.reader(file)

    # make a blank list
    lists_from_csv = []

    # add the data in the requested file to the blank list
    for row in csv_reader:
        lists_from_csv.append(row)

    # skip the first row
    result = lists_from_csv[1:]

# if not possible send an error log
except:
    result = 0

newdata = {'data':result}
print(json.dumps(newdata))











# # # pass the requested file
# file = open("y.csv", "r")
# # # read the file
# csv_reader = csv.reader(file)
# # # make a black list
# lists_from_csv = []
# # add the data in the requested file in a list
# for row in csv_reader:
#     lists_from_csv.append(row)
# results = lists_from_csv[1:]

# file_name = json.loads(sys.argv[1])


# if len(file_name) < 1:
#     results = results
#     result = results
# else:
#     result = 0

# newdata = {'data':result}
# print(json.dumps(newdata))
























# import sys, json

# # Function to calculate the sum of array
# def arraysum(arr):
# 	return sum(arr)

# # Get the command line arguments
# # and parse it to json
# data = json.loads(sys.argv[1])

# # Get the required field from
# # the data
# array = data['array']

# # Calculate the result
# result = arraysum(array)

# # Print the data in stringified
# # json format so that we can
# # easily parse it in Node.js
# newdata = {'sum':result}
# print(json.dumps(newdata))





# notes
# title - Node.js to Python: Calling the python process from node.js
























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
































































































# from subprocess import Popen,PIPE
# from sys import stdout
# import json
# from numpy.core.records import array
# # Import pandas library
# import pandas as pd
# from pandas.core.frame import DataFrame

# data = {'array':array}

# #stringify the data
# stringified_data = json.dumps(data)


# # call the node the process
# process = Popen(['node','server.js',stringified_data],stdout=PIPE)


# # now we wait for the response from the node process
# stdout = process.communicate()[0]

# # parse the data into json
# result_data = json.loads(stdout)
# print(result_data)





















# # initialize list of lists
# data = [['John', 723116674 ,'Hello, John!' ], ['Tom', 723116674 , 'Hello, Tom!'], ['Mary', 723116674 ,'Hello, Mary!']]

# # Create the pandas DataFrame
# df = pd.DataFrame(data, columns = ['Names', 'Contacts','Contents'])


# # def person(index):
# #     name = df["Names"][index]
# #     contact = df["Contacts"][index]
# #     content = df["Contents"][index]
# #     return [name,contact,content]

# # data = person(1)


