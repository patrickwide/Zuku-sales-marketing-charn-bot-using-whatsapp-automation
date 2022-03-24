# import packages to manipulate excel files
import pandas as pd
from pandas.core import indexing
from pandas.core.frame import DataFrame
from pandas.core.tools.datetimes import to_datetime


# data = pd.read_csv("updated_charn_list.csv")

# # change the data to dataframe easy to manipulate
# df = pd.DataFrame(data=data)
# # set the INSTALLDATE to date time format
# df['INSTALLDATE'] = pd.to_datetime(df['INSTALLDATE'])

# # make the INSTALLDATE the index 
# df.set_index("INSTALLDATE")

# # sort data
# df = df.sort_values(by="INSTALLDATE")

# # 1) make the row an int
# df['BILLCYCLE'] = df['BILLCYCLE'].astype(float)
# df['Contacts'] = df['Contacts'].astype(int)

# # 10 months from today = 14 July 2022
# start_date = pd.to_datetime("2020/9/14", format="%Y/%m/%d")
# end_date = pd.to_datetime("today", format="%Y/%m/%d")


# # 2020/9/14
# # get the data from that date going down
# df = df.loc[df["INSTALLDATE"] < start_date]



# # select the data that we are intrested with
# df = df[['INSTALLDATE','SUBS','FIRSTNAME','Contacts']]

# # call client who's names are nun customers else by name
# # and make a content message 
# # capitalize the first the letters of the name only
# df.loc[pd.isna(df['FIRSTNAME']) , "Content"] = "Dear ".capitalize() + "Customer" + " We miss you. Get reconnected to your ZUKU Internet today with 50% off. for enquiry please contact 0723116674"
# df.loc[df['FIRSTNAME'].str.len() >= 1 , "Content"] = "Dear ".capitalize() + df['FIRSTNAME'].str.capitalize() + " We miss you. Get reconnected to your ZUKU Internet today with 50% off. for enquiry please contact 0723116674"

# print(df.to_csv("./chuncked_data/master_data.csv"))

# start = 0
# data_len = len(df)
# counter = 0
# if data_len > 1000:    
#     while data_len > 1000:
#         print(f"From_: {start}")
#         print(f"To_: {start + 1000}")
#         print(f"Total_: {len(df[start: start + 1000])}")
#         df[start: start + 1000].to_csv(f"./chuncked_data/From_{start}-To_{start + 1000}.csv")
#         print(f"############### {counter}")
#         start += 1000
#         data_len -= 1000
#         counter += 1

# print(f"From_: {start}")
# print(f"To_: {start + len(df[start:])}")
# print(f"Total_: {len(df[start:])}")
# df[start:].to_csv(f"./chuncked_data/From_{start}-To_{start + len(df[start:])}.csv")
# counter += 1

# print(f"Total files saved = {counter}")











# import csv
# file = open("chuncked_data\From_15000-To_15127.csv", "r")
# csv_reader = csv.reader(file)
# lists_from_csv = []

# for row in csv_reader:
#     lists_from_csv.append(row)
    
# results = lists_from_csv[1:]


# print(results[0][5])






data = pd.read_csv("chuncked_data\From_15000-To_15127.csv")

df = pd.DataFrame(data)


print(len(df))















































# import sys, json
# import csv
# # from PIL import Image, ImageDraw, ImageFont

# file = open("pato.csv", "r")
# csv_reader = csv.reader(file)
# lists_from_csv = []
# for row in csv_reader:
#     lists_from_csv.append(row)
    
# results = lists_from_csv[1:]

# at = json.loads(sys.argv[1])

# if len(at) > 1:
#     result = results

# else:
#         result = None


# newdata = {'data':result}
# print(json.dumps(newdata))
